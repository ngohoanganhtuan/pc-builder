import { useReducer } from 'react';

// Store
import { reducer, Reducer, IReducerInitialState } from '@store';

// Helpers
import { getLocalStorageItem, setLocalStorageItem } from '@helpers';

/**
 * @function logger - This function is used to log previous state and next state.
 */
export const logger = (reducer: Reducer) =>
  ((state, action) => {
    // Call reducer and pass 2 arguments to calculate next state.
    const nextState = reducer(state, action);

    // 'state' is current state and will be considered as previous state once this function is executed completely.
    console.group();
    console.log('%cPrevState', 'color: orange', state);
    console.log('%cAction', 'color: gray', action);
    console.log('%cNextState', 'color: green', nextState);
    console.groupEnd();

    // Then return next state.
    return nextState;
  }) as Reducer;

/**
 * if configStore.isPersist = true, this function will be called to save the state to local storage on every state change.
 */
export const saveLocalStore = (reducer: Reducer) =>
  ((state, action) => {
    const nextState = reducer(state, action);
    setLocalStorageItem(nextState);

    return nextState;
  }) as Reducer;

/**
 * if configStore.isPersist = true, this function will check and retrieve data from local storage and parse it then return as initial state.
 */
export const init = (initialState: IReducerInitialState) => {
  const stringState = getLocalStorageItem();
  if (stringState) {
    try {
      return JSON.parse(stringState);
    } catch (error) {
      return initialState;
    }
  } else {
    return initialState;
  }
};

/**
 *
 */
export const appStore = (initialState: IReducerInitialState, { isPersist = false, isDebugLogger = false }) => {
  const middlewares = [];
  let setInitialStateFn = (initialState: IReducerInitialState) => initialState;

  if (isPersist) {
    middlewares.push(saveLocalStore);
    setInitialStateFn = init;
  }

  if (isDebugLogger) {
    middlewares.push(logger);
  }

  // Loop through functions in 'middlewares' array: saveLocalStore(reducer) => logger(reducer).
  // These functions always return reducer function which returns state
  const reducerWithMiddlewares = middlewares.reduce((acc, fn) => fn(acc), reducer);

  const [state, dispatch] = useReducer(reducerWithMiddlewares, initialState, setInitialStateFn);

  return { state, dispatch };
};
