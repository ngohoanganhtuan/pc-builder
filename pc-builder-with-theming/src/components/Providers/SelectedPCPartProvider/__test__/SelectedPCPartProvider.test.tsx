import { renderHook } from '@testing-library/react-hooks';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

// Components
import { QuantityProvider, SelectedPCPartProvider } from '@components';

// Enums
import { BRAND_NAMES, PC_PART_TYPES } from '@enums';

// Pages
import { SpecBuilderPage } from '@pages';

// Store
import { useQuantityState, useSelectedPCState } from '@store';

const mockData = {
  quantities: [
    {
      productId: 141,
      quantity: 10,
    },
    {
      productId: 421,
      quantity: 5,
    },
  ],
  selectedItems: [
    {
      thumbnail: 'https://cdn.techzones.vn/Data/Sites/1/Product/33622/techzones-msi-mag-x570s-tomahawk-max-wifi-4.png',
      name: 'MSI MAG X570S Tomahawk Max WiFi',
      price: 6990000,
      id: 141,
      type: PC_PART_TYPES.MAINBOARD,
      brandName: BRAND_NAMES.MSI,
    },
    {
      thumbnail:
        'https://cdn.techzones.vn/Data/Sites/1/Product/35710/techzones-amd-ryzen-7-5600x-6c12t-32mb-cache-37ghz-up-to-46ghz.jpg',
      name: 'AMD Ryzen 7 5600X - 6C/12T 32MB Cache 3.7GHz Up to 4.6GHz',
      price: 7600000,
      id: 421,
      type: PC_PART_TYPES.CPU,
      brandName: BRAND_NAMES.AMD,
    },
  ],
};

describe('Test [SelectedPCPartProvider] component', () => {
  test('Child component wrapped by component [SelectedPCPartProvider] can get value from selected pc part context', () => {
    const component = renderer
      .create(
        <SelectedPCPartProvider value={mockData.selectedItems}>
          <QuantityProvider value={mockData.quantities}>
            <BrowserRouter>
              <SpecBuilderPage />
            </BrowserRouter>
          </QuantityProvider>
        </SelectedPCPartProvider>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  test('Child component wrapped by component [SelectedPCPartProvider] can get initial value from selected pc part context', () => {
    const { current: quantities } = renderHook(useQuantityState).result;
    const { current: selectedItems } = renderHook(useSelectedPCState).result;
    const component = renderer
      .create(
        <SelectedPCPartProvider value={selectedItems}>
          <QuantityProvider value={quantities}>
            <BrowserRouter>
              <SpecBuilderPage />
            </BrowserRouter>
          </QuantityProvider>
        </SelectedPCPartProvider>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
