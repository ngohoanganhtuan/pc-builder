// Enums
import { BRAND_NAMES, PC_PART_TYPES } from '@enums';

// Interfaces
import { IPCPart } from '@interfaces';

export const mockData: IPCPart[] = [
  {
    thumbnail: 'https://cdn.techzones.vn/Data/Sites/1/Product/33622/techzones-msi-mag-x570s-tomahawk-max-wifi-4.png',
    name: 'MSI MAG X570S Tomahawk Max WiFi',
    price: 6990000,
    quantity: 1,
    type: PC_PART_TYPES.MAINBOARD,
    brandName: BRAND_NAMES.MSI,
    id: 1,
  },
  {
    thumbnail:
      'https://cdn.techzones.vn/Data/Sites/1/Product/35710/techzones-amd-ryzen-7-5600x-6c12t-32mb-cache-37ghz-up-to-46ghz.jpg',
    name: 'AMD Ryzen 7 5600X - 6C/12T 32MB Cache 3.7GHz Up to 4.6GHz',
    price: 7600000,
    quantity: 1,
    type: PC_PART_TYPES.CPU,
    brandName: BRAND_NAMES.AMD,
    id: 2,
  },
];

export const CartMockData: IPCPart[] = [
  {
    thumbnail:
      'https://cdn.techzones.vn/Data/Sites/1/Product/35710/techzones-amd-ryzen-7-5600x-6c12t-32mb-cache-37ghz-up-to-46ghz.jpg',
    name: 'AMD Ryzen 7 5600X - 6C/12T 32MB Cache 3.7GHz Up to 4.6GHz',
    price: 7600000,
    type: PC_PART_TYPES.CPU,
    brandName: BRAND_NAMES.AMD,
    quantity: 10,
    id: 1,
  },
  {
    thumbnail: 'https://cdn.techzones.vn/Data/Sites/1/Product/33573/techzones-intel-core-i5-12600.jpg',
    name: 'Intel Core i5-12500 - 6C/12T 18MB Cache Up to 4.60 GHz',
    price: 6550000,
    type: PC_PART_TYPES.CPU,
    brandName: BRAND_NAMES.INTEL,
    quantity: 20,
    id: 2,
  },
];

export const CPUMockData: IPCPart[] = [
  {
    thumbnail:
      'https://cdn.techzones.vn/Data/Sites/1/Product/35710/techzones-amd-ryzen-7-5600x-6c12t-32mb-cache-37ghz-up-to-46ghz.jpg',
    name: 'AMD Ryzen 7 5600X - 6C/12T 32MB Cache 3.7GHz Up to 4.6GHz',
    price: 7600000,
    type: PC_PART_TYPES.CPU,
    brandName: BRAND_NAMES.AMD,
    quantity: 0,
    id: 1,
  },
  {
    thumbnail:
      'https://cdn.techzones.vn/Data/Sites/1/Product/35709/techzones-amd-ryzen-5-5500-6c12t-16mb-cache-36-ghz-up-to-42-ghz.jpg',
    name: 'AMD Ryzen 5 5600 - 6C/12T 32MB Cache 3.5 GHz Up to 4.4 GHz',
    price: 5100000,
    type: PC_PART_TYPES.CPU,
    brandName: BRAND_NAMES.AMD,
    quantity: 0,
    id: 2,
  },
  {
    thumbnail:
      'https://cdn.techzones.vn/Data/Sites/1/Product/35707/techzones-amd-ryzen-5-5500-6c12t-16mb-cache-36-ghz-up-to-42-ghz.jpg',
    name: 'AMD Ryzen 5 5500 - 6C/12T 16MB Cache 3.6 GHz Up to 4.2 GHz',
    price: 4100000,
    type: PC_PART_TYPES.CPU,
    brandName: BRAND_NAMES.AMD,
    quantity: 0,
    id: 3,
  },
  {
    thumbnail:
      'https://cdn.techzones.vn/Data/Sites/1/Product/35706/techzones-amd-ryzen-5-4500mpk-6c12t-8mb-cache-36-ghz-up-to-41-ghz-1.jpg',
    name: 'AMD Ryzen 5 4500MPK - 6C/12T 8MB Cache 3.6 GHz Up to 4.1 GHz',
    price: 4100000,
    type: PC_PART_TYPES.CPU,
    brandName: BRAND_NAMES.AMD,
    quantity: 0,
    id: 4,
  },
  {
    thumbnail:
      'https://cdn.techzones.vn/Data/Sites/1/Product/35705/techzones-amd-ryzen-3-4100mpk-4c8t-4mb-cache-38-ghz-up-to-40-ghz-1.jpg',
    name: 'AMD Ryzen 3 4100MPK - 4C/8T 4MB Cache 3.8 GHz Up to 4.0 GHz',
    price: 2600000,
    type: PC_PART_TYPES.CPU,
    brandName: BRAND_NAMES.AMD,
    quantity: 0,
    id: 5,
  },
  {
    thumbnail: 'https://cdn.techzones.vn/Data/Sites/1/Product/33576/techzones-intel-core-i9-12900f.jpg',
    name: 'Intel Core i9-12900F',
    price: 14500000,
    type: PC_PART_TYPES.CPU,
    brandName: BRAND_NAMES.INTEL,
    quantity: 0,
    id: 6,
  },
  {
    thumbnail: 'https://cdn.techzones.vn/Data/Sites/1/Product/33573/techzones-intel-core-i5-12600.jpg',
    name: 'Intel Core i5-12500 - 6C/12T 18MB Cache Up to 4.60 GHz',
    price: 6550000,
    type: PC_PART_TYPES.CPU,
    brandName: BRAND_NAMES.INTEL,
    quantity: 0,
    id: 7,
  },
  {
    thumbnail: 'https://cdn.techzones.vn/Data/Sites/1/Product/33574/techzones-intel-core-i5-12600.jpg',
    name: 'Intel Core i5-12400 - 6C/12T 18MB Cache Up to 4.40 GHz',
    price: 6250000,
    type: PC_PART_TYPES.CPU,
    brandName: BRAND_NAMES.INTEL,
    quantity: 0,
    id: 8,
  },
  {
    thumbnail: 'https://cdn.techzones.vn/Data/Sites/1/Product/33575/techzones-intel-core-i5-12600.jpg',
    name: 'Intel Core i5-12400F - 6C/12T 18MB Cache Up to 4.40 GHz',
    price: 5400000,
    type: PC_PART_TYPES.CPU,
    brandName: BRAND_NAMES.INTEL,
    quantity: 0,
    id: 9,
  },
  {
    thumbnail: 'https://cdn.techzones.vn/Data/Sites/1/Product/33571/techzones-intel-core-i3-12100f.jpg',
    name: 'Intel Core i3-12100F - 4C/8T 12MB Cache 3.30GHz Up to 4.30GHz',
    price: 2890000,
    type: PC_PART_TYPES.CPU,
    brandName: BRAND_NAMES.INTEL,
    quantity: 0,
    id: 9,
  },
];

export const brandsRelatedToPCPartsMockData: BRAND_NAMES[] = [
  BRAND_NAMES.INTEL,
  BRAND_NAMES.AMD,
  BRAND_NAMES.COLORFUL,
  BRAND_NAMES.ASUS,
];

export const totalPriceMockData = 14500000;
