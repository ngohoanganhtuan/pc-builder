// Interfaces
import { IPCPart, IProductQuantity } from '@interfaces';

// Constants
import { CURRENCY } from '@constants';

/**
 * @function calculateTotalPrice - This function handles calculate total price.
 * @returns { string }
 */
export const calculateTotalPrice = ({
  quantities = [],
  products = [],
}: {
  quantities: IProductQuantity[] | null;
  products: IPCPart[] | null;
}): string => {
  const total = quantities?.reduce((acc, quantity) => {
    const productItem = products?.find((product) => quantity.productId === product.id);
    const price = productItem ? productItem.price * quantity.quantity : 0;

    return acc + price;
  }, 0);

  return Intl.NumberFormat(CURRENCY.LOCALES, {
    style: 'currency',
    currency: CURRENCY.FORMAT,
  })
    .format(total ? total : 0)
    .replace(/\u00a0/g, ' ');
};
