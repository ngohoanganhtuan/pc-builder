// Store
import { reducer, REDUCER_ACTIONS, IReducerInitialState } from '@store';

// Enums
import { BRAND_NAMES, PC_PART_TYPES } from '@enums';

describe('Test [reducer] function', () => {
  test('Action [INITIAL_HYDRATE] should success', () => {
    const state: IReducerInitialState = {
      selectedItems: [],
      quantities: [],
      cart: [],
    };
    const action = {
      type: REDUCER_ACTIONS.INITIAL_HYDRATE,
      payload: {
        selectedItems: [
          {
            id: 1,
            name: 'Intel i3',
            price: 1000000,
            thumbnail: 'no-thumbnail',
            type: PC_PART_TYPES.CPU,
            brandName: BRAND_NAMES.INTEL,
          },
        ],
        quantities: [
          {
            productId: 1,
            quantity: 1,
          },
        ],
        cart: [
          {
            productId: 1,
            quantity: 1,
          },
        ],
      },
    };
    const result = reducer(state, action);
    expect(result).toEqual(action.payload);
  });

  test('Action [SELECTED_ITEM] should success', () => {
    const state: IReducerInitialState = {
      selectedItems: [],
      quantities: [],
      cart: [],
    };
    const action = {
      type: REDUCER_ACTIONS.SELECTED_ITEM,
      payload: {
        id: 1,
        name: 'Intel i3',
        price: 1000000,
        thumbnail: 'no-thumbnail',
        type: PC_PART_TYPES.CPU,
        brandName: BRAND_NAMES.INTEL,
      },
    };
    const result = reducer(state, action);
    expect(result.selectedItems).toContainEqual(action.payload);
    expect(result.quantities).toContainEqual({
      productId: action.payload.id,
      quantity: 1,
    });
  });

  test('Action [REMOVE_SELECTED_ITEM] should success', () => {
    const state: IReducerInitialState = {
      selectedItems: [
        {
          id: 1,
          name: 'Intel i3',
          price: 1000000,
          thumbnail: 'no-thumbnail',
          type: PC_PART_TYPES.CPU,
          brandName: BRAND_NAMES.INTEL,
        },
      ],
      quantities: [],
      cart: [],
    };
    const action = {
      type: REDUCER_ACTIONS.REMOVE_SELECTED_ITEM,
      payload: {
        id: 1,
        name: 'Intel i3',
        price: 1000000,
        thumbnail: 'no-thumbnail',
        type: PC_PART_TYPES.CPU,
        brandName: BRAND_NAMES.INTEL,
      },
    };
    const result = reducer(state, action);
    expect(result.selectedItems).not.toContainEqual(action.payload);
    expect(result.quantities).not.toContainEqual({
      productId: action.payload.id,
      quantity: 1,
    });
  });

  test('Action [REMOVE_SELECTED_ITEM] should not change selectedItems and quantities in state if id mismatched', () => {
    const state: IReducerInitialState = {
      selectedItems: [
        {
          id: 1,
          name: 'Intel i3',
          price: 1000000,
          thumbnail: 'no-thumbnail',
          type: PC_PART_TYPES.CPU,
          brandName: BRAND_NAMES.INTEL,
        },
      ],
      quantities: [],
      cart: [],
    };
    const action = {
      type: REDUCER_ACTIONS.REMOVE_SELECTED_ITEM,
      payload: {
        id: 9999,
        name: 'Intel i3',
        price: 1000000,
        thumbnail: 'no-thumbnail',
        type: PC_PART_TYPES.CPU,
        brandName: BRAND_NAMES.INTEL,
      },
    };
    const result = reducer(state, action);
    expect(result.selectedItems).toEqual(state.selectedItems);
    expect(result.quantities).toEqual(state.quantities);
  });

  test('Action [INCREASE_QUANTITY] should success', () => {
    const state: IReducerInitialState = {
      selectedItems: [],
      quantities: [
        {
          productId: 1,
          quantity: 1,
        },
      ],
      cart: [],
    };
    const action = {
      type: REDUCER_ACTIONS.INCREASE_QUANTITY,
      payload: 1,
    };
    const result = reducer(state, action);
    expect(result.quantities).toContainEqual({
      productId: 1,
      quantity: 2,
    });
  });

  test('Action [INCREASE_QUANTITY] should not change quantities in state if id mismatched', () => {
    const state: IReducerInitialState = {
      selectedItems: [],
      quantities: [
        {
          productId: 1,
          quantity: 1,
        },
      ],
      cart: [],
    };
    const action = {
      type: REDUCER_ACTIONS.INCREASE_QUANTITY,
      payload: 9999,
    };
    const result = reducer(state, action);
    expect(result.quantities).toEqual(state.quantities);
  });

  test('Action [DECREASE_QUANTITY] should success', () => {
    const state: IReducerInitialState = {
      selectedItems: [],
      quantities: [
        {
          productId: 1,
          quantity: 2,
        },
      ],
      cart: [],
    };
    const action = {
      type: REDUCER_ACTIONS.DECREASE_QUANTITY,
      payload: 1,
    };
    const result = reducer(state, action);
    expect(result.quantities).toContainEqual({
      productId: 1,
      quantity: 1,
    });
  });

  test('Action [DECREASE_QUANTITY] should not change quantities in state if id mismatched', () => {
    const state: IReducerInitialState = {
      selectedItems: [],
      quantities: [
        {
          productId: 1,
          quantity: 2,
        },
      ],
      cart: [],
    };
    const action = {
      type: REDUCER_ACTIONS.DECREASE_QUANTITY,
      payload: 9999,
    };
    const result = reducer(state, action);
    expect(result.quantities).toContainEqual({
      productId: 1,
      quantity: 2,
    });
  });

  test('Action [PUSH_SELECTED_PRODUCTS_TO_CART] should success', () => {
    const state: IReducerInitialState = {
      selectedItems: [],
      quantities: [
        {
          productId: 1,
          quantity: 2,
        },
      ],
      cart: [],
    };
    const action = {
      type: REDUCER_ACTIONS.PUSH_SELECTED_PRODUCTS_TO_CART,
    };
    const result = reducer(state, action);
    expect(result.cart).toContainEqual({
      productId: 1,
      quantity: 2,
    });
  });

  test('Action [PUSH_SELECTED_PRODUCTS_TO_CART] should increase the quantity of the product already in the cart', () => {
    const state: IReducerInitialState = {
      selectedItems: [],
      quantities: [
        {
          productId: 1,
          quantity: 1,
        },
      ],
      cart: [
        {
          productId: 1,
          quantity: 2,
        },
      ],
    };
    const action = {
      type: REDUCER_ACTIONS.PUSH_SELECTED_PRODUCTS_TO_CART,
    };
    const result = reducer(state, action);
    expect(result.cart).toContainEqual({
      productId: 1,
      quantity: 3,
    });
  });

  test('Action [REMOVE_CART_ITEM] should success', () => {
    const state: IReducerInitialState = {
      selectedItems: [],
      quantities: [],
      cart: [
        {
          productId: 1,
          quantity: 2,
        },
      ],
    };
    const action = {
      type: REDUCER_ACTIONS.REMOVE_CART_ITEM,
      payload: 1,
    };
    const result = reducer(state, action);
    expect(result.cart).not.toContainEqual({
      productId: 1,
      quantity: 2,
    });
  });

  test('Action [INCREASE_CART_ITEM_QUANTITY] should success', () => {
    const state: IReducerInitialState = {
      selectedItems: [],
      quantities: [],
      cart: [
        {
          productId: 1,
          quantity: 1,
        },
      ],
    };
    const action = {
      type: REDUCER_ACTIONS.INCREASE_CART_ITEM_QUANTITY,
      payload: 1,
    };
    const result = reducer(state, action);
    expect(result.cart).toContainEqual({
      productId: 1,
      quantity: 2,
    });
  });

  test('Action [DECREASE_CART_ITEM_QUANTITY] should success', () => {
    const state: IReducerInitialState = {
      selectedItems: [],
      quantities: [],
      cart: [
        {
          productId: 1,
          quantity: 2,
        },
      ],
    };
    const action = {
      type: REDUCER_ACTIONS.DECREASE_CART_ITEM_QUANTITY,
      payload: 1,
    };
    const result = reducer(state, action);
    expect(result.cart).toContainEqual({
      productId: 1,
      quantity: 1,
    });
  });

  test('Action [ADD_SINGLE_PRODUCT_TO_CART] should success', () => {
    const state: IReducerInitialState = {
      selectedItems: [],
      quantities: [],
      cart: [],
    };
    const action = {
      type: REDUCER_ACTIONS.ADD_SINGLE_PRODUCT_TO_CART,
      payload: {
        id: 1,
        name: 'Intel i3',
        price: 1000000,
        thumbnail: 'no-thumbnail',
        type: PC_PART_TYPES.CPU,
        brandName: BRAND_NAMES.INTEL,
      },
    };
    const result = reducer(state, action);
    expect(result.cart).toContainEqual({
      productId: 1,
      quantity: 1,
    });
  });

  test('Action [ADD_SINGLE_PRODUCT_TO_CART] should increase the quantity of the product already in the cart', () => {
    const state: IReducerInitialState = {
      selectedItems: [],
      quantities: [],
      cart: [
        {
          productId: 1,
          quantity: 2,
        },
      ],
    };
    const action = {
      type: REDUCER_ACTIONS.ADD_SINGLE_PRODUCT_TO_CART,
      payload: {
        id: 1,
        name: 'Intel i3',
        price: 1000000,
        thumbnail: 'no-thumbnail',
        type: PC_PART_TYPES.CPU,
        brandName: BRAND_NAMES.INTEL,
      },
    };
    const result = reducer(state, action);
    expect(result.cart).toContainEqual({
      productId: 1,
      quantity: 3,
    });
  });
});
