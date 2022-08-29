import { createContext } from 'react';

// Interfaces
import { IProductQuantity } from '@interfaces';

/**
 * @constant { IProductQuantity[] | null } cartInitialState - Initial state of cart context state.
 */

export const cartInitialState: IProductQuantity[] = [];

export const CartContext = createContext<IProductQuantity[] | null>(cartInitialState);
