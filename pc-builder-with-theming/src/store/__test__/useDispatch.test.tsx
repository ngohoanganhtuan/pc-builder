import { renderHook } from '@testing-library/react-hooks';
import { fireEvent, render } from '@testing-library/react';

// Components
import { DispatchProvider } from '@components';

// Stores
import { useDispatch, ReducerAction } from '@store';

const ComsumerComponent = () => {
  const dispatch = useDispatch();

  return (
    <button
      data-testid="dispatch-button"
      onClick={() => dispatch({} as ReducerAction)}
    >
      Button
    </button>
  );
};

describe('Test [useDispatch] hook', () => {
  test('Hook [useDispatch] should get value correctly', () => {
    const handleDispatch = jest.fn();
    const { getByTestId } = render(
      <DispatchProvider value={handleDispatch}>
        <ComsumerComponent />
      </DispatchProvider>
    );
    fireEvent.click(getByTestId('dispatch-button'));
    expect(handleDispatch).toHaveBeenCalled();
  });

  test('Hook [useDispatch] should return function as initial value', () => {
    const { result } = renderHook(useDispatch);
    expect(result.current.toString()).toEqual('() => { }');
  });
});
