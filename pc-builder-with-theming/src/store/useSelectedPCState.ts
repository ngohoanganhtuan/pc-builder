import { useContext } from 'react';

// Contexts
import { SelectedPCPartContext } from '@contexts';

export const useSelectedPCState = () => {
  const state = useContext(SelectedPCPartContext);
  return state;
};
