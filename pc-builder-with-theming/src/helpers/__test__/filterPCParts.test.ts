// Helpers
import { filterPCParts, filterPCPartsByPriceRange, filterPCPartsByBrands } from '@helpers';

// Enums
import { BRAND_NAMES, PC_PART_TYPES } from '@enums';

// Interfaces
import { IPCPart } from '@interfaces';

const mockPCParts: IPCPart[] = [
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
  {
    thumbnail: 'https://cdn.techzones.vn/Data/Sites/1/Product/33576/techzones-intel-core-i9-12900f.jpg',
    name: 'Intel Core i9-12900F',
    price: 14500000,
    type: PC_PART_TYPES.CPU,
    brandName: BRAND_NAMES.INTEL,
    id: 6,
  },
  {
    thumbnail: 'https://cdn.techzones.vn/Data/Sites/1/Product/33573/techzones-intel-core-i5-12600.jpg',
    name: 'Intel Core i5-12500 - 6C/12T 18MB Cache Up to 4.60 GHz',
    price: 6550000,
    type: PC_PART_TYPES.CPU,
    brandName: BRAND_NAMES.INTEL,
    id: 7,
  },
];

describe('Test [filterPCParts] helper', () => {
  test('Helper [filterPCParts] return a filtered array of pc parts with provided setting', () => {
    const filteredPCParts = filterPCParts({
      pcPartsRawData: mockPCParts,
      selectedBrands: [BRAND_NAMES.INTEL],
      minPrice: 6000000,
      maxPrice: 7000000,
      pageNumber: 1,
    });
    expect(filteredPCParts).toEqual([
      {
        thumbnail: 'https://cdn.techzones.vn/Data/Sites/1/Product/33573/techzones-intel-core-i5-12600.jpg',
        name: 'Intel Core i5-12500 - 6C/12T 18MB Cache Up to 4.60 GHz',
        price: 6550000,
        type: PC_PART_TYPES.CPU,
        brandName: BRAND_NAMES.INTEL,
        id: 7,
      },
    ]);
  });

  test('Helper [filterPCParts] return a filtered array of pc parts with provided setting when selectBrands is empty', () => {
    const filteredPCParts = filterPCParts({
      pcPartsRawData: mockPCParts,
      selectedBrands: [],
      minPrice: 0,
      maxPrice: 7000000,
      pageNumber: 1,
    });
    expect(filteredPCParts).toEqual([
      {
        thumbnail:
          'https://cdn.techzones.vn/Data/Sites/1/Product/35709/techzones-amd-ryzen-5-5500-6c12t-16mb-cache-36-ghz-up-to-42-ghz.jpg',
        name: 'AMD Ryzen 5 5600 - 6C/12T 32MB Cache 3.5 GHz Up to 4.4 GHz',
        price: 5100000,
        type: PC_PART_TYPES.CPU,
        brandName: BRAND_NAMES.AMD,
        id: 2,
      },
      {
        thumbnail: 'https://cdn.techzones.vn/Data/Sites/1/Product/33573/techzones-intel-core-i5-12600.jpg',
        name: 'Intel Core i5-12500 - 6C/12T 18MB Cache Up to 4.60 GHz',
        price: 6550000,
        type: PC_PART_TYPES.CPU,
        brandName: BRAND_NAMES.INTEL,
        id: 7,
      },
    ]);
  });

  test('Helper [filterPCPartsByPriceRange] return a filtered array of pc parts by price range', () => {
    const filteredPCParts = filterPCPartsByPriceRange({
      result: mockPCParts,
      minPrice: 5000000,
      maxPrice: 7000000,
    });
    expect(filteredPCParts).toEqual([
      {
        thumbnail:
          'https://cdn.techzones.vn/Data/Sites/1/Product/35709/techzones-amd-ryzen-5-5500-6c12t-16mb-cache-36-ghz-up-to-42-ghz.jpg',
        name: 'AMD Ryzen 5 5600 - 6C/12T 32MB Cache 3.5 GHz Up to 4.4 GHz',
        price: 5100000,
        type: PC_PART_TYPES.CPU,
        brandName: BRAND_NAMES.AMD,
        id: 2,
      },
      {
        thumbnail: 'https://cdn.techzones.vn/Data/Sites/1/Product/33573/techzones-intel-core-i5-12600.jpg',
        name: 'Intel Core i5-12500 - 6C/12T 18MB Cache Up to 4.60 GHz',
        price: 6550000,
        type: PC_PART_TYPES.CPU,
        brandName: BRAND_NAMES.INTEL,
        id: 7,
      },
    ]);
  });

  test('Helper [filterPCPartsByBrands] return a filtered array of pc parts by brand names', () => {
    const filteredPCParts = filterPCPartsByBrands({
      result: mockPCParts,
      selectedBrands: [BRAND_NAMES.AMD],
    });
    expect(filteredPCParts).toEqual([
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
    ]);
  });
});
