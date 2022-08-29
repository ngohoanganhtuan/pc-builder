// Contexts
import { cartInitialState, quantityInitialState, selectedPCPartInitialState } from '@contexts';

// Enums
import { PAGES } from '@enums';

// Interfaces
import { IPCPart, IProductQuantity } from '@interfaces';

/**
 * @interface IReducerInitialState - Reducer initial state.
 */
export interface IReducerInitialState {
  [key: string]: IPCPart[] | IProductQuantity[] | PAGES;
  selectedItems: IPCPart[];
  quantities: IProductQuantity[];
  cart: IProductQuantity[];
}

/**
 * @constant { IReducerInitialState } initialState - Initial state of state in store.
 */
export const initialState: IReducerInitialState = {
  quantities: [...quantityInitialState],
  selectedItems: [...selectedPCPartInitialState],
  cart: [...cartInitialState],
};

/**
 * @enum { REDUCER_ACTIONS } - Enum for reducer actions.
 */
export enum REDUCER_ACTIONS {
  INITIAL_HYDRATE = 'INITIAL_HYDRATE',
  SELECTED_ITEM = 'SELECTED_ITEM',
  REMOVE_SELECTED_ITEM = 'REMOVE_SELECTED_ITEM',
  INCREASE_QUANTITY = 'INCREASE_QUANTITY',
  DECREASE_QUANTITY = 'DECREASE_QUANTITY',
  INCREASE_ALL_QUANTITY = 'INCREASE_ALL_QUANTITY',
  PUSH_SELECTED_PRODUCTS_TO_CART = 'PUSH_SELECTED_PRODUCTS_TO_CART',
  REMOVE_CART_ITEM = 'REMOVED_CART_ITEM',
  INCREASE_CART_ITEM_QUANTITY = 'INCREASE_CART_ITEM_QUANTITY',
  DECREASE_CART_ITEM_QUANTITY = 'DECREASE_CART_ITEM_QUANTITY',
  ADD_SINGLE_PRODUCT_TO_CART = 'ADD_SINGLE_PRODUCT_TO_CART',
}

/**
 * @type { ReducerAction } - Type for reducer action.
 * @property { REDUCER_ACTION } type - Reducer action type.
 * @property { any } payload - Data passed through dispatch object.
 */
export type ReducerAction = {
  type: REDUCER_ACTIONS;
  payload?: any;
};

export type Reducer = (state: IReducerInitialState, action: ReducerAction) => IReducerInitialState;

// TODO:
// appReducer = selectedPCPartReducer + quantityReducer + cartReducer + userReducer + .....
export const reducer: Reducer = (state: IReducerInitialState, action: ReducerAction) => {
  switch (action.type) {
    case REDUCER_ACTIONS.INITIAL_HYDRATE:
      return action.payload;

    case REDUCER_ACTIONS.SELECTED_ITEM:
      return {
        ...state,
        selectedItems: [...state.selectedItems, action.payload],
        quantities: [...state.quantities, { productId: action.payload.id, quantity: 1 }],
      };

    case REDUCER_ACTIONS.REMOVE_SELECTED_ITEM: {
      const updatedItems = state.selectedItems.filter((item: IPCPart) => item.id !== action.payload.id);
      const updatedQuantities = state.quantities.filter((item) => item.productId !== action.payload.id);

      return {
        ...state,
        selectedItems: updatedItems,
        quantities: updatedQuantities,
      };
    }

    case REDUCER_ACTIONS.INCREASE_QUANTITY: {
      const updatedQuantities = state.quantities.map((item) => {
        if (item.productId === action.payload) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }

        return item;
      });
      return {
        ...state,
        quantities: updatedQuantities,
      };
    }

    case REDUCER_ACTIONS.DECREASE_QUANTITY: {
      const updatedQuantities = state.quantities.map((item) => {
        if (item.productId === action.payload) {
          return {
            ...item,
            quantity: item.quantity === 1 ? 1 : item.quantity - 1,
          };
        }

        return item;
      });
      return {
        ...state,
        quantities: updatedQuantities,
      };
    }

    case REDUCER_ACTIONS.INCREASE_ALL_QUANTITY: {
      const updatedQuantities = state.quantities.map((item) => ({
        ...item,
        quantity: item.quantity + 1,
      }));

      return {
        ...state,
        quantities: updatedQuantities,
      };
    }

    case REDUCER_ACTIONS.PUSH_SELECTED_PRODUCTS_TO_CART: {
      const updatedCart = [...state.cart];
      state.quantities.forEach((specItem) => {
        const itemFoundIndex = updatedCart.findIndex((cartItem) => cartItem.productId === specItem.productId);
        if (itemFoundIndex !== -1) {
          updatedCart[itemFoundIndex] = {
            ...updatedCart[itemFoundIndex],
            quantity: updatedCart[itemFoundIndex].quantity + specItem.quantity,
          };
        } else {
          updatedCart.push(specItem);
        }
      });

      return {
        ...state,
        cart: updatedCart,
      };
    }

    case REDUCER_ACTIONS.REMOVE_CART_ITEM: {
      const updatedCart = state.cart.filter((item) => item.productId !== action.payload);

      return {
        ...state,
        cart: updatedCart,
      };
    }

    case REDUCER_ACTIONS.INCREASE_CART_ITEM_QUANTITY: {
      const updatedCart = state.cart.map((item) => {
        if (item.productId === action.payload) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }

        return item;
      });

      return {
        ...state,
        cart: updatedCart,
      };
    }

    case REDUCER_ACTIONS.DECREASE_CART_ITEM_QUANTITY: {
      const updatedCart = state.cart.map((item) => {
        if (item.productId === action.payload) {
          return {
            ...item,
            quantity: item.quantity === 1 ? 1 : item.quantity - 1,
          };
        }

        return item;
      });
      return {
        ...state,
        cart: updatedCart,
      };
    }

    case REDUCER_ACTIONS.ADD_SINGLE_PRODUCT_TO_CART: {
      let updatedCart = state.cart;
      const itemFound = state.cart.find((item) => item.productId === action.payload.id);
      if (itemFound) {
        updatedCart = updatedCart.map((item) =>
          item.productId === action.payload.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      } else {
        updatedCart = [
          ...updatedCart,
          {
            productId: action.payload.id,
            quantity: 1,
          },
        ];
      }

      return {
        ...state,
        cart: updatedCart,
      };
    }

    default:
      return state;
  }
};
