import { useContext } from 'react';

// Contexts
import { CartContext } from '@contexts';

export const useCart = () => {
  const state = useContext(CartContext);
  return state;
};
