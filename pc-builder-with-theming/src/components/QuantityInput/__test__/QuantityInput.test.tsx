import { render, fireEvent } from '@testing-library/react';
import * as renderer from 'react-test-renderer';

// Components
import { QuantityInput } from '@components';

describe('Test [QuantityInput] component', () => {
  test('Component [QuantityInput] render correctly', () => {
    const component = renderer
      .create(
        <QuantityInput
          value={500}
          onClickIncrease={jest.fn()}
          onClickDecrease={jest.fn()}
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  test('Component [QuantityInput] calls function when user click increase', () => {
    const handleIncrease = jest.fn();
    const { getByTestId } = render(
      <QuantityInput
        value={500}
        onClickIncrease={handleIncrease}
      />
    );
    fireEvent.click(getByTestId('increase-quantity-button'));
    expect(handleIncrease).toHaveBeenCalled();
  });

  test('Component [QuantityInput] calls function when user click decrease', () => {
    const handleDecrease = jest.fn();
    const { getByTestId } = render(
      <QuantityInput
        value={500}
        onClickDecrease={handleDecrease}
      />
    );
    fireEvent.click(getByTestId('decrease-quantity-button'));
    expect(handleDecrease).toHaveBeenCalled();
  });
});
