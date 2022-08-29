// Helpers
import { filterPCPartDataCallback } from '@helpers';

// Enums
import { BRAND_NAMES, PC_PART_TYPES } from '@enums';

const mockData = [
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
    id: 3,
  },
];

describe('Test [filterPCPartDataCallback] helper', () => {
  test('Helper [filterPCPartDataCallback] should return transformed an array of PC part', () => {
    const callback = filterPCPartDataCallback('id', 3);
    const transformedData = callback(mockData);
    expect(transformedData).toEqual([
      {
        thumbnail:
          'https://cdn.techzones.vn/Data/Sites/1/Product/35709/techzones-amd-ryzen-5-5500-6c12t-16mb-cache-36-ghz-up-to-42-ghz.jpg',
        name: 'AMD Ryzen 5 5600 - 6C/12T 32MB Cache 3.5 GHz Up to 4.4 GHz',
        price: 5100000,
        type: PC_PART_TYPES.CPU,
        brandName: BRAND_NAMES.AMD,
        id: 3,
      },
    ]);
  });
});
