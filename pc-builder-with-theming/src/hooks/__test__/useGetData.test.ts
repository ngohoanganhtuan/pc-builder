import { useState } from 'react';
import { renderHook } from '@testing-library/react-hooks';

// Hooks
import { useGetData } from '@hooks/useGetData';

// Enums
import { BRAND_NAMES, PC_PART_TYPES } from '@enums';

const mockData = [
  {
    thumbnail: 'https://cdn.techzones.vn/Data/Sites/1/Product/33622/techzones-msi-mag-x570s-tomahawk-max-wifi-4.png',
    name: 'MSI MAG X570S Tomahawk Max WiFi',
    price: 6990000,
    id: 1,
    type: PC_PART_TYPES.MAINBOARD,
    brandName: BRAND_NAMES.MSI,
  },
  {
    thumbnail:
      'https://cdn.techzones.vn/Data/Sites/1/Product/35710/techzones-amd-ryzen-7-5600x-6c12t-32mb-cache-37ghz-up-to-46ghz.jpg',
    name: 'AMD Ryzen 7 5600X - 6C/12T 32MB Cache 3.7GHz Up to 4.6GHz',
    price: 7600000,
    id: 2,
    type: PC_PART_TYPES.CPU,
    brandName: BRAND_NAMES.AMD,
  },
];

jest.mock('react', () => {
  return {
    ...jest.requireActual('react'),
    useState: jest.fn(),
  };
});

describe('Test [useGetData] hook', () => {
  const getDataCallbackMock = jest.fn();
  const onErrorMock = jest.fn();
  test('Hook [useGetData] should return an object contains transformed array with transform data callback', () => {
    (useState as jest.Mock).mockImplementation(() => [mockData, jest.fn()]);
    const { data } = renderHook(() =>
      useGetData({
        getDataCallback: getDataCallbackMock,
        transformDataCallback: jest.fn().mockImplementation(() => [
          {
            thumbnail:
              'https://cdn.techzones.vn/Data/Sites/1/Product/35710/techzones-amd-ryzen-7-5600x-6c12t-32mb-cache-37ghz-up-to-46ghz.jpg',
            name: 'AMD Ryzen 7 5600X - 6C/12T 32MB Cache 3.7GHz Up to 4.6GHz',
            price: 7600000,
            id: 2,
            type: PC_PART_TYPES.CPU,
            brandName: BRAND_NAMES.AMD,
          },
        ]),
        onError: onErrorMock,
      })
    ).result.current;
    expect(data).toEqual([
      {
        thumbnail:
          'https://cdn.techzones.vn/Data/Sites/1/Product/35710/techzones-amd-ryzen-7-5600x-6c12t-32mb-cache-37ghz-up-to-46ghz.jpg',
        name: 'AMD Ryzen 7 5600X - 6C/12T 32MB Cache 3.7GHz Up to 4.6GHz',
        price: 7600000,
        id: 2,
        type: PC_PART_TYPES.CPU,
        brandName: BRAND_NAMES.AMD,
      },
    ]);
  });

  test('Hook [useGetData] should return an object contains array without transform data callback', () => {
    const { data } = renderHook(() =>
      useGetData({
        getDataCallback: getDataCallbackMock,
        onError: onErrorMock,
      })
    ).result.current;
    expect(data).toEqual(mockData);
  });

  test('Hook [useGetData] should return an object contains fetching status', () => {
    (useState as jest.Mock).mockImplementation(() => [true, jest.fn()]);
    const { isFetching } = renderHook(() =>
      useGetData({
        getDataCallback: jest.fn(),
        onError: onErrorMock,
      })
    ).result.current;
    expect(isFetching).toEqual(true);
  });

  test('Hook [useGetData] should call onError callback if there is error', () => {
    jest.spyOn(console, 'error').mockImplementation(() => jest.fn());
    renderHook(() =>
      useGetData({
        getDataCallback: () => {
          throw Error('Something wrong.');
        },
        onError: onErrorMock,
      })
    );
    expect(onErrorMock).toHaveBeenCalled();
  });
});
