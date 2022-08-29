import { renderHook } from '@testing-library/react-hooks';
import { render } from '@testing-library/react';

// Components
import { CartProvider } from '@components';

// Stores
import { useCart } from '@store';

const ComsumerComponent = () => {
  const cart = useCart();

  return (
    <div data-testid="cart">
      {cart &&
        cart.map((item) => (
          <p key={item.productId}>
            id:{item.productId} - quantity:{item.quantity}
          </p>
        ))}
    </div>
  );
};

describe('Test [useCart] hook', () => {
  test('Hook [useCart] should get value correctly', () => {
    const { getByTestId } = render(
      <CartProvider
        value={[
          {
            productId: 425,
            quantity: 12,
          },
        ]}
      >
        <ComsumerComponent />
      </CartProvider>
    );
    expect(getByTestId('cart')).toHaveTextContent('id:425 - quantity:12');
  });

  test('Hook [useCart] should return empty array as initial value', () => {
    const { result } = renderHook(useCart);
    expect(result.current).toEqual([]);
  });
});
