import { ReactElement } from 'react';

// Contexts
import { QuantityContext } from '@contexts';

// Interfaces
import { IProductQuantity } from '@interfaces';

type Props = {
  children: ReactElement[] | ReactElement;
  value: IProductQuantity[] | null;
};

export const QuantityProvider = ({ children, value }: Props) => {
  return <QuantityContext.Provider value={value}>{children}</QuantityContext.Provider>;
};
