import { useContext } from 'react';

// Contexts
import { QuantityContext } from '@contexts';

export const useQuantityState = () => {
  const state = useContext(QuantityContext);
  return state;
};
