import { render, fireEvent } from '@testing-library/react';
import * as renderer from 'react-test-renderer';

// Components
import { RangeInput } from '@components';

describe('Test [RangeInput] component', () => {
  const handleSetMin = jest.fn();
  const handleSetMax = jest.fn();
  const initialProps = {
    minValue: 0,
    maxValue: 100,
    handleMinChanged: handleSetMin,
    handleMaxChanged: handleSetMax,
  };

  afterEach(() => {
    handleSetMin.mockClear();
    handleSetMax.mockClear();
  });

  test('Component [RangeInput] should render correctly', () => {
    const component = renderer.create(<RangeInput {...initialProps} />).toJSON();
    expect(component).toMatchSnapshot();
  });

  test('Component [RangeInput] calls handle set min function when user enter values', () => {
    const { getByTestId } = render(<RangeInput {...initialProps} />);
    fireEvent.change(getByTestId('min-range-input'), {
      target: { value: '500' },
    });
    expect(handleSetMin).toHaveBeenCalled();
  });

  test('Component [RangeInput] calls handle set max function when user enter values', () => {
    const { getByTestId } = render(<RangeInput {...initialProps} />);
    fireEvent.change(getByTestId('max-range-input'), {
      target: { value: '1000' },
    });
    expect(handleSetMax).toHaveBeenCalled();
  });
});
