import { createContext } from 'react';

// Interfaces
import { IPCPart } from '@interfaces';

/**
 * @constant { IPCPart[] | null } selectedPCPartInitialState - Initial state of selected pc part context state.
 */
export const selectedPCPartInitialState: IPCPart[] = [];

export const SelectedPCPartContext = createContext<IPCPart[] | null>(selectedPCPartInitialState);
