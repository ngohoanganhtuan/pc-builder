import { createContext } from 'react';

// Interfaces
import { IProductQuantity } from '@interfaces';

/**
 * @constant { IProductQuantity[] | null } quantityInitialState - Initial state of quantity context state.
 */
export const quantityInitialState: IProductQuantity[] = [];

export const QuantityContext = createContext<IProductQuantity[] | null>(quantityInitialState);
