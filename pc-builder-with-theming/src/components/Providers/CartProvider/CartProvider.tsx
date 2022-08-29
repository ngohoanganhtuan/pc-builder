import { ReactElement } from 'react';

// Contexts
import { CartContext } from '@contexts';

// Interfaces
import { IProductQuantity } from '@interfaces';

type Props = {
  children: ReactElement[] | ReactElement;
  value: IProductQuantity[] | null;
};

export const CartProvider = ({ children, value }: Props) => {
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
