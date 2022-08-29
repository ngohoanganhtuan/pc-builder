// Helpers
import { getBrandsRelatedToPCParts } from '@helpers';

// Enums
import { BRAND_NAMES, PC_PART_TYPES } from '@enums';

describe('Test [getBrandsRelatedToPCParts] helper', () => {
  test('Helper [getBrandsRelatedToPCParts] should return an array of brand names related to pc parts when we pass an array of pc parts', () => {
    const brands = getBrandsRelatedToPCParts([
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
    ]);
    expect(brands).toEqual([BRAND_NAMES.INTEL, BRAND_NAMES.INNO3D]);
  });

  test('Helper [getBrandsRelatedToPCParts] should return an empty when we dont pass pc parts array', () => {
    const brands = getBrandsRelatedToPCParts();
    expect(brands).toEqual([]);
  });
});
