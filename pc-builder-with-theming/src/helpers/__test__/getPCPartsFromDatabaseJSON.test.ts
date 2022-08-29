import { waitFor } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

// Helpers
import { getPCPartsFromDatabaseJSON } from '@helpers';

// Enums
import { BRAND_NAMES, PC_PART_TYPES } from '@enums';

const mockData = [
  {
    id: 41,
    name: 'Intel G860',
    price: 500000,
    thumbnail: 'no-thumbnail',
    type: PC_PART_TYPES.CPU,
    brandName: BRAND_NAMES.INTEL,
  },
];

jest.mock('@helpers', () => {
  return {
    getPCPartsFromDatabaseJSON: jest.fn().mockImplementation(() => mockData),
  };
});

describe('Test [getPCPartsFromDatabaseJSON] helper', () => {
  test('Helper [getPCPartsFromDatabaseJSON] should return an array of PC part', async () => {
    const { result } = renderHook(() => getPCPartsFromDatabaseJSON());
    await waitFor(() => {
      expect(result.current).toEqual(mockData);
    });
  });
});
