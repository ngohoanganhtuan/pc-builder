import { renderHook } from '@testing-library/react-hooks';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

// Components
import { CartProvider, Header } from '@components';

// Store
import { useCart } from '@store';

describe('Test [CartProvider] component', () => {
  test('Child component wrapped by component [CartProvider] can get value from cart context', () => {
    const component = renderer
      .create(
        <CartProvider
          value={[
            {
              productId: 41,
              quantity: 2,
            },
            {
              productId: 521,
              quantity: 2,
            },
          ]}
        >
          <BrowserRouter>
            <Header handleToggleSidebar={jest.fn()} />
          </BrowserRouter>
        </CartProvider>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  test('Child component wrapped by component [CartProvider] can get initial value from cart context', () => {
    const { current: carts } = renderHook(useCart).result;
    const component = renderer
      .create(
        <CartProvider value={carts}>
          <BrowserRouter>
            <Header handleToggleSidebar={jest.fn()} />
          </BrowserRouter>
        </CartProvider>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
