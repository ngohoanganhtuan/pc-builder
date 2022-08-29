import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

// Pages
import { CartPage } from '@pages';

// Enums
import { BRAND_NAMES, PC_PART_TYPES } from '@enums';

const mockData = {
  pcParts: [
    {
      thumbnail:
        'https://cdn.techzones.vn/Data/Sites/1/Product/35710/techzones-amd-ryzen-7-5600x-6c12t-32mb-cache-37ghz-up-to-46ghz.jpg',
      name: 'AMD Ryzen 7 5600X - 6C/12T 32MB Cache 3.7GHz Up to 4.6GHz',
      price: 7600000,
      type: PC_PART_TYPES.CPU,
      brandName: BRAND_NAMES.AMD,
      id: 1,
    },
    {
      thumbnail:
        'https://cdn.techzones.vn/Data/Sites/1/Product/35709/techzones-amd-ryzen-5-5500-6c12t-16mb-cache-36-ghz-up-to-42-ghz.jpg',
      name: 'AMD Ryzen 5 5600 - 6C/12T 32MB Cache 3.5 GHz Up to 4.4 GHz',
      price: 5100000,
      type: PC_PART_TYPES.CPU,
      brandName: BRAND_NAMES.AMD,
      id: 2,
    },
  ],
  cart: [
    {
      productId: 1,
      quantity: 1,
    },
    {
      productId: 2,
      quantity: 2,
    },
  ],
};

jest.mock('@hooks', () => {
  return {
    useGetData: jest
      .fn()
      .mockImplementationOnce(() => ({
        isFetching: false,
        data: mockData.pcParts,
      }))
      .mockImplementationOnce(() => ({
        isFetching: true,
        data: mockData.pcParts,
      }))
      .mockImplementation(() => ({
        isFetching: false,
        data: [],
      })),
  };
});

jest.mock('@store', () => {
  return {
    useCart: jest
      .fn()
      .mockImplementationOnce(() => mockData.cart)
      .mockImplementationOnce(() => mockData.cart)
      .mockImplementation(() => []),
    useDispatch: jest.fn(),
  };
});

describe('Test [CartPage] page', () => {
  test('Page [CartPage] should render correctly when data is fetched', () => {
    const component = renderer
      .create(
        <BrowserRouter>
          <CartPage />
        </BrowserRouter>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  test('Page [CartPage] should render correctly when data is fetching', () => {
    const component = renderer
      .create(
        <BrowserRouter>
          <CartPage />
        </BrowserRouter>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  test('Page [CartPage] should render correctly when data is fetched but empty', () => {
    const component = renderer
      .create(
        <BrowserRouter>
          <CartPage />
        </BrowserRouter>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
