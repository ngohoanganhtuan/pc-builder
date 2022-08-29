import { useContext } from 'react';

// Contexts
import { DispatchContext } from '@contexts';

export const useDispatch = () => {
  const dispatch = useContext(DispatchContext);
  return dispatch;
};
