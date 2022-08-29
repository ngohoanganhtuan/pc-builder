import { renderHook } from '@testing-library/react-hooks';
import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render } from '@testing-library/react';

// Components
import { DispatchProvider } from '@components';

// Pages
import { SpecBuilderPage } from '@pages';

// Store
import { useDispatch } from '@store';

describe('Test [DispatchProvider] component', () => {
  test('Child component wrapped by component [DispatchProvider] can get value from dispatch context', () => {
    const handleDispatch = jest.fn();
    const { getByTestId } = render(
      <DispatchProvider value={handleDispatch}>
        <BrowserRouter>
          <SpecBuilderPage />
        </BrowserRouter>
      </DispatchProvider>
    );
    fireEvent.click(getByTestId('add-to-cart-button'));
    expect(handleDispatch).toHaveBeenCalled();
  });

  test('Child component wrapped by component [DispatchProvider] can get initial value from dispatch context', () => {
    const dispatch = renderHook(useDispatch).result.current;
    const dispatchMock = jest.fn(() => dispatch);
    const { getByTestId } = render(
      <DispatchProvider value={dispatchMock}>
        <BrowserRouter>
          <SpecBuilderPage />
        </BrowserRouter>
      </DispatchProvider>
    );
    fireEvent.click(getByTestId('add-to-cart-button'));
    expect(dispatchMock).toHaveBeenCalled();
  });
});
