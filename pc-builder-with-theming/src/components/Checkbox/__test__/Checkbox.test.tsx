import { fireEvent, render, screen } from '@testing-library/react';
import * as renderer from 'react-test-renderer';

// Components
import { Checkbox } from '@components';

describe('Test [Checkbox] component', () => {
  const handleCheckboxChanged = jest.fn();
  const initialProps = {
    id: 'checkbox-1',
    label: 'Checkbox label',
    value: 'checkbox-1',
    name: 'checkbox-1',
    checked: true,
    handleCheckboxChanged,
  };

  test('Component [Checkbox] matches DOM Snapshot', () => {
    const component = renderer.create(<Checkbox {...initialProps} />).toJSON();
    expect(component).toMatchSnapshot();
  });

  test('Component [Checkbox] should call handleCheckboxChanged function when user click the checkbox', () => {
    render(<Checkbox {...initialProps} />);
    fireEvent.click(screen.getByRole('checkbox'));
    expect(handleCheckboxChanged).toHaveBeenCalled();
  });
});
