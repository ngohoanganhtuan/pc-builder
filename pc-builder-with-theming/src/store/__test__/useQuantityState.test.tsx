import { renderHook } from '@testing-library/react-hooks';
import { render } from '@testing-library/react';

// Components
import { QuantityProvider } from '@components';

// Stores
import { useQuantityState } from '@store';

const ComsumerComponent = () => {
  const quantities = useQuantityState();

  return (
    <div data-testid="quantity">
      {quantities &&
        quantities.map((item) => (
          <p key={item.productId}>
            id:{item.productId} - quantity:{item.quantity}
          </p>
        ))}
    </div>
  );
};

describe('Test [useQuantity] hook', () => {
  test('Hook [useQuantity] should get value correctly', () => {
    const { getByTestId } = render(
      <QuantityProvider
        value={[
          {
            productId: 425,
            quantity: 12,
          },
        ]}
      >
        <ComsumerComponent />
      </QuantityProvider>
    );
    expect(getByTestId('quantity')).toHaveTextContent('id:425 - quantity:12');
  });

  test('Hook [useQuantity] should return empty array as initial value', () => {
    const { result } = renderHook(useQuantityState);
    expect(result.current).toEqual([]);
  });
});
