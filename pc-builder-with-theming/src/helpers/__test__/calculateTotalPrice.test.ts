// Enums
import { BRAND_NAMES, PC_PART_TYPES } from '@enums';

// Helpers
import { calculateTotalPrice } from '@helpers';

// Interfaces
import { IPCPart, IProductQuantity } from '@interfaces';

const mockData = {
  quantities: [
    {
      productId: 1,
      quantity: 10,
    },
    {
      productId: 2,
      quantity: 5,
    },
  ],
  products: [
    {
      id: 1,
      name: 'Intel i3',
      brandName: BRAND_NAMES.INTEL,
      price: 1500000,
      thumbnail: 'no-thumbnail',
      type: PC_PART_TYPES.CPU,
    },
    {
      id: 2,
      name: 'Inno 3D RTX 2060 12GB',
      brandName: BRAND_NAMES.INNO3D,
      price: 5000000,
      thumbnail: 'no-thumbnail',
      type: PC_PART_TYPES.GPU,
    },
  ],
};

describe('Test [calculateTotalPrice] helper', () => {
  test('Helper [calculateTotalPrice] calculates total price of product based on quantity when we passed two array quantities and products should return total price', () => {
    const totalPrice = calculateTotalPrice(mockData);
    expect(totalPrice).toEqual('40.000.000 ₫');
  });

  test('Helper [calculateTotalPrice] calculates total price of product based on quantity when we passed nothing should return 0 ₫', () => {
    const totalPrice = calculateTotalPrice({
      quantities: [],
      products: [],
    });
    expect(totalPrice).toEqual('0 ₫');
  });

  test('Helper [calculateTotalPrice] calculates total price of product based on quantity when we passed nothing should return 0 ₫', () => {
    const totalPrice = calculateTotalPrice({
      quantities: [],
      products: [],
    });
    expect(totalPrice).toEqual('0 ₫');
  });

  test('Helper [calculateTotalPrice] calculates total price of product based on quantity when we passed only quantities array should return 0 ₫', () => {
    const totalPrice = calculateTotalPrice({
      quantities: mockData.quantities,
      products: [],
    });
    expect(totalPrice).toEqual('0 ₫');
  });

  test('Helper [calculateTotalPrice] calculates total price of product based on quantity when we passed only products array should return 0 ₫', () => {
    const totalPrice = calculateTotalPrice({
      quantities: [],
      products: mockData.products,
    });
    expect(totalPrice).toEqual('0 ₫');
  });

  test('Helper [calculateTotalPrice] calculates total price of product based on quantity when both products and quantities are null should return 0 ₫', () => {
    const totalPrice = calculateTotalPrice({
      quantities: null,
      products: null,
    });
    expect(totalPrice).toEqual('0 ₫');
  });

  test('Helper [calculateTotalPrice] calculates total price of product based on quantity when passed only quantities array and products is null should return 0 ₫', () => {
    const totalPrice = calculateTotalPrice({
      quantities: [],
      products: null,
    });
    expect(totalPrice).toEqual('0 ₫');
  });

  test('Helper [calculateTotalPrice] calculates total price of product based on quantity when passed only products array and quantities is null should return 0 ₫', () => {
    const totalPrice = calculateTotalPrice({
      quantities: null,
      products: [],
    });
    expect(totalPrice).toEqual('0 ₫');
  });

  test('Helper [calculateTotalPrice] calculates total price of product based on quantity when pass empty object anything should return 0 ₫', () => {
    const totalPrice = calculateTotalPrice(
      {} as {
        quantities: IProductQuantity[] | null;
        products: IPCPart[] | null;
      }
    );
    expect(totalPrice).toEqual('0 ₫');
  });
});
