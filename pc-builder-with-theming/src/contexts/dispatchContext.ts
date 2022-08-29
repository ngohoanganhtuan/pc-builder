import { createContext, Dispatch } from 'react';

// Store
import { ReducerAction } from '@store';

export const DispatchContext = createContext<Dispatch<ReducerAction>>(() => {});
