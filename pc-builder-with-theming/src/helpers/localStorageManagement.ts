// Constants
import { LOCAL_STORAGE_ITEM_NAME } from '@constants';

// Store
import { initialState, IReducerInitialState } from '@store';

/**
 * @function removeLocalStorageItem - This function handles remove local storage item.
 */
export const removeLocalStorageItem = (): void => {
  localStorage.removeItem(LOCAL_STORAGE_ITEM_NAME);
};

/**
 * @function isLocalStorageItemExist - This function checks if local storage item exist.
 */
export const isLocalStorageItemExist = (): boolean => !!localStorage.getItem(LOCAL_STORAGE_ITEM_NAME);

/**
 * @function setLocalStorageItem - This function handles set local storage.
 */
export const setLocalStorageItem = (spec: IReducerInitialState): void => {
  localStorage.setItem(LOCAL_STORAGE_ITEM_NAME, JSON.stringify(spec));
};

/**
 * @function getLocalStorageItem - This function handles get local storage item.
 */
export const getLocalStorageItem = (): string =>
  localStorage.getItem(LOCAL_STORAGE_ITEM_NAME) || JSON.stringify(initialState);
