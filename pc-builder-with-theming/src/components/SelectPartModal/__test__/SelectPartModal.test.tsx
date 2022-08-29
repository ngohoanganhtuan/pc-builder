import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

// Hooks
import { useGetData } from '@hooks';

// Components
import { SelectPartModal } from '@components';

// Enums
import { BRAND_NAMES, PC_PART_TYPES } from '@enums';

const mockData = Array.from({ length: 12 }).map((mockItem, index) => ({
  thumbnail:
    'https://cdn.techzones.vn/Data/Sites/1/Product/35710/techzones-amd-ryzen-7-5600x-6c12t-32mb-cache-37ghz-up-to-46ghz.jpg',
  name: `${index} AMD Ryzen 7 5600X - 6C/12T 32MB Cache 3.7GHz Up to 4.6GHz`,
  price: 7600000,
  type: PC_PART_TYPES.CPU,
  brandName: BRAND_NAMES.AMD,
  id: index,
}));

jest.mock('@hooks', () => {
  return {
    useGetData: jest.fn(),
  };
});

describe('Test [SelectPartModal] component', () => {
  const handleCloseModal = jest.fn();
  const handleSelectPCPart = jest.fn();
  const initialProps = {
    handleCloseModal,
    handleSelectPCPart,
  };

  afterEach(() => {
    handleCloseModal.mockClear();
    handleSelectPCPart.mockClear();
  });

  test('Component [SelectPartModal] should render correctly when data is fetching', () => {
    const mockHook = (useGetData as jest.Mock).mockImplementation(() => ({
      data: mockData,
      isFetching: true,
    }));
    const component = renderer
      .create(
        <BrowserRouter>
          <SelectPartModal {...initialProps} />
        </BrowserRouter>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
    mockHook.mockReset();
  });

  test('Component [SelectPartModal] should render correctly when data is fetched', () => {
    (useGetData as jest.Mock).mockImplementation(() => ({
      data: mockData,
      isFetching: false,
    }));
    const component = renderer
      .create(
        <BrowserRouter>
          <SelectPartModal {...initialProps} />
        </BrowserRouter>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  test('Component [SelectPartModal] calls function close modal when user click close button', () => {
    const { getByText } = render(
      <BrowserRouter>
        <SelectPartModal {...initialProps} />
      </BrowserRouter>
    );
    const button = getByText('Close');
    expect(button.textContent).toEqual('Close');
    fireEvent.click(button);
    expect(handleCloseModal).toHaveBeenCalled();
  });

  test('Component [SelectPartModal] calls function select pc part when user click select button', () => {
    const { getAllByTestId } = render(
      <BrowserRouter>
        <SelectPartModal {...initialProps} />
      </BrowserRouter>
    );
    const button = getAllByTestId('pc-part-select-button')[0];
    fireEvent.click(button);
    expect(handleSelectPCPart).toHaveBeenCalled();
  });

  test('Component [SelectPartModal] should show load more button if hook returns more than 10 items', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <SelectPartModal {...initialProps} />
      </BrowserRouter>
    );
    expect(getByTestId('load-more-button')).toBeInTheDocument();
  });
});
