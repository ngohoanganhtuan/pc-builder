import { render, fireEvent } from '@testing-library/react';
import * as renderer from 'react-test-renderer';

// Components
import { SelectPartFilter } from '@components';

// Enums
import { BRAND_NAMES } from '@enums';

describe('Test [SelectPartFilter] component', () => {
  const handleMinChanged = jest.fn();
  const handleMaxChanged = jest.fn();
  const handleCheckboxChanged = jest.fn();
  const initialProps = {
    brands: [BRAND_NAMES.ADATA],
    selectedBrands: [BRAND_NAMES.ADATA],
    minPrice: 1000,
    maxPrice: 5000,
    handleMinChanged,
    handleMaxChanged,
    handleCheckboxChanged,
  };

  afterEach(() => {
    handleMinChanged.mockClear();
    handleMaxChanged.mockClear();
    handleCheckboxChanged.mockClear();
  });

  test('Component [SelectPartFilter] should render correctly', () => {
    const component = renderer.create(<SelectPartFilter {...initialProps} />).toJSON();
    expect(component).toMatchSnapshot();
  });

  test('Component [SelectPartFilter] calls function checkbox changed when user tick checkbox', () => {
    const { getAllByRole } = render(<SelectPartFilter {...initialProps} />);
    fireEvent.click(getAllByRole('checkbox')[0]);
    expect(handleCheckboxChanged).toHaveBeenCalled();
  });

  test('Component [SelectPartFilter] calls function min changed when user change min input', () => {
    const { getByTestId } = render(<SelectPartFilter {...initialProps} />);
    fireEvent.change(getByTestId('min-range-input'), {
      target: { value: '500' },
    });
    expect(handleMinChanged).toHaveBeenCalled();
  });

  test('Component [SelectPartFilter] calls function max changed when user change max input', () => {
    const { getByTestId } = render(<SelectPartFilter {...initialProps} />);
    fireEvent.change(getByTestId('max-range-input'), {
      target: { value: '1000' },
    });
    expect(handleMaxChanged).toHaveBeenCalled();
  });
});
