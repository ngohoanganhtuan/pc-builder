import { useState } from 'react';
import renderer from 'react-test-renderer';

// Hooks
import { useGetData } from '@hooks';

// Pages
import { PCPartDetail } from '@pages';

// Enums
import { BRAND_NAMES, PC_PART_TYPES } from '@enums';

const mockData = {
  thumbnail: 'https://cdn.techzones.vn/Data/Sites/1/Product/33622/techzones-msi-mag-x570s-tomahawk-max-wifi-4.png',
  name: 'MSI MAG X570S Tomahawk Max WiFi',
  price: 6990000,
  id: 1,
  type: PC_PART_TYPES.MAINBOARD,
  brandName: BRAND_NAMES.MSI,
};

jest.mock('@hooks/useGetData');
jest.mock('react', () => {
  return {
    ...jest.requireActual('react'),
    useState: jest.fn(),
  };
});

const useStateMock = useState as jest.Mock;
const useGetDataMock = useGetData as jest.Mock;

describe('Test [PCPartDetail] page', () => {
  test('Page [PCPartDetail] should render loading spinner when data is fetching', () => {
    useStateMock.mockImplementation(() => [false, jest.fn()]);
    useGetDataMock.mockImplementation(() => ({
      isFetching: true,
      data: mockData,
    }));
    const component = renderer.create(<PCPartDetail />).toJSON();
    expect(component).toMatchSnapshot();
  });

  test('Page [PCPartDetail] should render correctly when data is fetched', () => {
    useStateMock.mockImplementation(() => [false, jest.fn()]);
    useGetDataMock.mockImplementation(() => ({
      isFetching: false,
      data: mockData,
    }));
    const component = renderer.create(<PCPartDetail />).toJSON();
    expect(component).toMatchSnapshot();
  });

  test('Page [PCPartDetail] should render corrrectly when button is clicked', () => {
    useStateMock.mockImplementation(() => [true, jest.fn()]);
    const component = renderer.create(<PCPartDetail />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
