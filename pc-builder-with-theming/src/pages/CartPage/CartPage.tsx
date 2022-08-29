import { useCallback, useEffect, useMemo } from 'react';

// Components
import { NavLink } from 'react-router-dom';
import { Loading, PCPart } from '@components';
import EmptyCart from './Components/EmptyCart/EmptyCart';

// Enums
import { PC_PART_VARIANTS, ROUTES } from '@enums';

// Store
import { REDUCER_ACTIONS, useCart, useDispatch } from '@store';

// Helpers
import { calculateTotalPrice, getPCPartsFromDatabaseJSON } from '@helpers';

// Hooks
import { useGetData } from '@hooks';
import { useTheme } from '@hooks/useTheme';

// Interfaces
import { IPCPart, IProductQuantity } from '@interfaces';

/**
 * @variable renderCartItems - If carts have any product render them, else show text let user know they have nothing in their cart
 */
const renderCartItems = ({
  cartItems,
  pcParts,
  handleRemoveCartItem,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
}: {
  cartItems: IProductQuantity[] | null;
  pcParts: IPCPart[];
  handleRemoveCartItem: () => void;
  handleIncreaseQuantity: () => void;
  handleDecreaseQuantity: () => void;
}) => (
  <ul className="py-2 px-0 list-unstyled w-100">
    {cartItems &&
      cartItems.map((cartItem: IProductQuantity) => {
        const pcPart = pcParts.find((item) => item.id === cartItem.productId);
        if (pcPart) {
          return (
            <li
              className="my-3"
              key={pcPart.id}
            >
              <PCPart
                additionalClasses="w-100"
                id={pcPart.id}
                name={pcPart.name}
                price={pcPart.price}
                thumbnail={pcPart.thumbnail}
                quantity={cartItem.quantity}
                variant={PC_PART_VARIANTS.SELECTED}
                handleDelete={handleRemoveCartItem}
                handleIncreaseQuantity={handleIncreaseQuantity}
                handleDecreaseQuantity={handleDecreaseQuantity}
              />
            </li>
          );
        }
        return null;
      })}
  </ul>
);

/**
 * This component represents CartPage
 */
export const CartPage = (): JSX.Element => {
  const cartItems = useCart();
  const { setTheme, setTextColor } = useTheme();

  const { data: pcParts, isFetching } = useGetData<IPCPart>({
    getDataCallback: getPCPartsFromDatabaseJSON,
    onError: (error) => {
      throw error;
    },
  });
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = 'Cart';
  }, []);

  /**
   * @variable { string } totalPrice - Total price of PC parts in the cart.
   */
  const totalPrice = useMemo(
    () =>
      calculateTotalPrice({
        quantities: cartItems,
        products: pcParts,
      }),
    [cartItems, pcParts]
  );

  /**
   * @function handleRemoveCartItem - This function handles remove cart item.
   */
  const handleRemoveCartItem = useCallback((pcPartId?: number) => {
    dispatch({ type: REDUCER_ACTIONS.REMOVE_CART_ITEM, payload: pcPartId });
  }, []);

  /**
   * @function handleIncreaseQuantity - This function handles increase cart item quantity.
   */
  const handleIncreaseQuantity = useCallback((pcPartId?: number) => {
    dispatch({
      type: REDUCER_ACTIONS.INCREASE_CART_ITEM_QUANTITY,
      payload: pcPartId,
    });
  }, []);

  /**
   * @function handleDecreaseQuantity - This function handles decrease cart item quantity.
   */
  const handleDecreaseQuantity = useCallback((pcPartId?: number) => {
    dispatch({
      type: REDUCER_ACTIONS.DECREASE_CART_ITEM_QUANTITY,
      payload: pcPartId,
    });
  }, []);

  return (
    <div
      className={setTextColor(
        'cart-page container pt-1 pb-5 d-flex flex-column flex-grow-1 flex-shrink-1 flex-basis-0'
      )}
    >
      <NavLink
        to={ROUTES.ROOT}
        className="text-decoration-none"
      >
        <span className="fw-light fs-6">
          <i className="bi bi-arrow-bar-left"></i>Back to Builder
        </span>
      </NavLink>
      <h2 className="fs-1 mt-1">
        Your Cart <i className="bi bi-bag-heart" />
      </h2>
      <Loading isFetching={isFetching}>
        {cartItems && cartItems.length > 0 ? (
          <>
            {renderCartItems({
              cartItems,
              pcParts,
              handleRemoveCartItem,
              handleIncreaseQuantity,
              handleDecreaseQuantity,
            })}

            <div className={setTheme('px-3 py-1 bg-glass rounded-pill align-self-end px-5 text-center')}>
              <p className="fs-2 m-0 fw-bold">Total : {totalPrice}</p>
            </div>
          </>
        ) : (
          <EmptyCart />
        )}
      </Loading>
    </div>
  );
};
