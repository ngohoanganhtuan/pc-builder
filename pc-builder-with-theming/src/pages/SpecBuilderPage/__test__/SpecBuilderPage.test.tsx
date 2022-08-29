import { BrowserRouter } from 'react-router-dom';
import * as renderer from 'react-test-renderer';

// Pages
import { SpecBuilderPage } from '@pages';

jest.mock('@store', () => {
  return {
    useSelectedPCState: jest.fn().mockReturnValue([
      {
        thumbnail:
          'https://cdn.techzones.vn/Data/Sites/1/Product/35710/techzones-amd-ryzen-7-5600x-6c12t-32mb-cache-37ghz-up-to-46ghz.jpg',
        name: 'AMD Ryzen 7 5600X - 6C/12T 32MB Cache 3.7GHz Up to 4.6GHz',
        price: 7600000,
        type: 'Processor (CPU)',
        brandName: 'AMD',
        id: 2,
      },
    ]),
    useQuantityState: jest.fn().mockReturnValue([
      {
        productId: 2,
        quantity: 2,
      },
    ]),
    useDispatch: () => {},
  };
});

describe('Test [SpecBuilderPage] page', () => {
  test('Page [SpecBuilderPage] should render correctly', () => {
    const component = renderer
      .create(
        <BrowserRouter>
          <SpecBuilderPage />
        </BrowserRouter>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
