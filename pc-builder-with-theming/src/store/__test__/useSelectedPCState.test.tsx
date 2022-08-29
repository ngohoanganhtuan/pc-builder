import { renderHook } from '@testing-library/react-hooks';
import { render } from '@testing-library/react';

// Components
import { SelectedPCPartProvider } from '@components';

// Stores
import { useSelectedPCState } from '@store';

// Enums
import { BRAND_NAMES, PC_PART_TYPES } from '@enums';

const ComsumerComponent = () => {
  const selectedPCParts = useSelectedPCState();

  return (
    <div data-testid="selected-pc-parts">
      {selectedPCParts && selectedPCParts.map((item) => <p key={item.id}>id:{item.id}</p>)}
    </div>
  );
};

describe('Test [useSelectedPCState] hook', () => {
  test('Hook [useSelectedPCState] should get value correctly', () => {
    const { getByTestId } = render(
      <SelectedPCPartProvider
        value={[
          {
            id: 1,
            name: 'Intel i3',
            price: 1000000,
            brandName: BRAND_NAMES.INTEL,
            type: PC_PART_TYPES.CPU,
            thumbnail: 'no-thumbnail',
          },
        ]}
      >
        <ComsumerComponent />
      </SelectedPCPartProvider>
    );
    expect(getByTestId('selected-pc-parts')).toHaveTextContent('id:1');
  });

  test('Hook [useSelectedPCState] should return empty array as initial value', () => {
    const { result } = renderHook(useSelectedPCState);
    expect(result.current).toEqual([]);
  });
});
