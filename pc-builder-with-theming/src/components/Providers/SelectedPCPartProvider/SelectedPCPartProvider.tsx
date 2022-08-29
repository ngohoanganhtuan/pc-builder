import { ReactElement } from 'react';

// Contexts
import { SelectedPCPartContext } from '@contexts';

// Interfaces
import { IPCPart } from '@interfaces';

type Props = {
  children: ReactElement | ReactElement[];
  value: IPCPart[] | null;
};

export const SelectedPCPartProvider = ({ children, value }: Props) => {
  return <SelectedPCPartContext.Provider value={value}>{children}</SelectedPCPartContext.Provider>;
};
