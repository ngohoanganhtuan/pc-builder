import { Dispatch, ReactElement } from 'react';

// Contexts
import { DispatchContext } from '@contexts';

// Store
import { ReducerAction } from '@store';

type Props = {
  children: ReactElement | ReactElement[];
  value: Dispatch<ReducerAction>;
};

export const DispatchProvider = ({ children, value }: Props) => {
  return <DispatchContext.Provider value={value}>{children}</DispatchContext.Provider>;
};
