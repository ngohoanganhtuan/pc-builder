// Enums
import { PAGES } from '@enums';

// Store
import { logger, reducer, REDUCER_ACTIONS, saveLocalStore, init, appStore } from '@store';

const state = {
  quantities: [],
  selectedItems: [],
  currentPage: PAGES.BUILDER,
  cart: [],
};

jest.mock('@helpers', () => {
  return {
    ...jest.requireActual('@helpers'),
    getLocalStorageItem: jest.fn().mockReturnValue(
      JSON.stringify({
        quantities: [],
        selectedItems: [],
        currentPage: PAGES.BUILDER,
        cart: [],
      })
    ),
  };
});

jest.mock('react', () => {
  return {
    ...jest.requireActual('react'),
    useReducer: jest.fn().mockReturnValue([
      {
        quantities: [],
        selectedItems: [],
        currentPage: PAGES.BUILDER,
        cart: [],
      },
      () => {},
    ]),
  };
});

expect.extend({
  toBeFunction(received) {
    if (typeof received === 'function') {
      return {
        message: () => 'Received input is a function',
        pass: true,
      };
    } else {
      return {
        message: () => 'Received is not a function',
        pass: false,
      };
    }
  },
});

describe('Test [appStore] functions', () => {
  test('Function [logger] should return a next state object and log prevstate, actions, nextstate', () => {
    const consoleLog = jest.spyOn(console, 'log');
    const loggerTakesReducer = logger(reducer);
    const loggerReturnsNextState = loggerTakesReducer(state, {
      type: REDUCER_ACTIONS.INITIAL_HYDRATE,
      payload: {
        ...state,
        currentPage: PAGES.CART,
      },
    });
    expect(consoleLog).toBeCalledTimes(3);
    expect(loggerReturnsNextState.currentPage).toEqual(PAGES.CART);
  });

  test('Function [saveLocalStore] should return a next state object', () => {
    const loggerTakesReducer = saveLocalStore(reducer);
    const loggerReturnsNextState = loggerTakesReducer(state, {
      type: REDUCER_ACTIONS.INITIAL_HYDRATE,
      payload: {
        ...state,
        currentPage: PAGES.CART,
      },
    });
    expect(loggerReturnsNextState.currentPage).toEqual(PAGES.CART);
  });

  test('Function [init] should return a state object if localStorage has item', () => {
    expect(init(state)).toEqual(state);
  });

  test('Function [appStore] should return an object contains state object and dispatch function', () => {
    const store = appStore(state, {
      isPersist: true,
      isDebugLogger: true,
    });
    expect(store.state).toEqual(state);
    expect(store.dispatch).toBeFunction();
  });
});
