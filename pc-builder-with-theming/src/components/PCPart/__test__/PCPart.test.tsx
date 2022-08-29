import { fireEvent, render } from '@testing-library/react';
import * as renderer from 'react-test-renderer';

// Components
import { PCPart } from '@components';

// Enums
import { PC_PART_VARIANTS } from '@enums';
import { BrowserRouter } from 'react-router-dom';

describe('Test [PCPart] component', () => {
  test('Selected variant of Component [PCPart] should render correctly', () => {
    const component = renderer
      .create(
        <BrowserRouter>
          <PCPart
            name="PC Part Name"
            price={1000000}
            thumbnail="PC Part Thumbnail"
            variant={PC_PART_VARIANTS.SELECTED}
            quantity={500}
          />
        </BrowserRouter>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  test('Selected variant of Component [PCPart] calls function delete when user click delete button', () => {
    const handleDelete = jest.fn();
    const { getByTestId } = render(
      <BrowserRouter>
        <PCPart
          name="PC Part Name"
          price={1000000}
          thumbnail="PC Part Thumbnail"
          variant={PC_PART_VARIANTS.SELECTED}
          quantity={500}
          handleDelete={handleDelete}
        />
      </BrowserRouter>
    );
    fireEvent.click(getByTestId('pc-part-remove-button'));
    expect(handleDelete).toHaveBeenCalled();
  });

  test('Selected variant of Component [PCPart] calls function increase when user click increase button', () => {
    const handleIncreaseQuantity = jest.fn();
    const { getByTestId } = render(
      <BrowserRouter>
        <PCPart
          name="PC Part Name"
          price={1000000}
          thumbnail="PC Part Thumbnail"
          variant={PC_PART_VARIANTS.SELECTED}
          quantity={500}
          handleIncreaseQuantity={handleIncreaseQuantity}
        />
      </BrowserRouter>
    );
    fireEvent.click(getByTestId('increase-quantity-button'));
    expect(handleIncreaseQuantity).toHaveBeenCalled();
  });

  test('Selected variant of Component [PCPart] calls function decrease when user click decrease button', () => {
    const handleDecreaseQuantity = jest.fn();
    const { getByTestId } = render(
      <BrowserRouter>
        <PCPart
          name="PC Part Name"
          price={1000000}
          thumbnail="PC Part Thumbnail"
          variant={PC_PART_VARIANTS.SELECTED}
          quantity={500}
          handleDecreaseQuantity={handleDecreaseQuantity}
        />
      </BrowserRouter>
    );
    fireEvent.click(getByTestId('decrease-quantity-button'));
    expect(handleDecreaseQuantity).toHaveBeenCalled();
  });

  test('Unselected variant of Component [PCPart] should render correctly', () => {
    const component = renderer
      .create(
        <BrowserRouter>
          <PCPart
            name="PC Part Name"
            price={1000000}
            thumbnail="PC Part Thumbnail"
            variant={PC_PART_VARIANTS.UNSELECTED}
          />
        </BrowserRouter>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  test('Unselected variant of Component [PCPart] call function select when user click select button', () => {
    const handleSelect = jest.fn();
    const { getByTestId } = render(
      <BrowserRouter>
        <PCPart
          name="PC Part Name"
          price={1000000}
          thumbnail="PC Part Thumbnail"
          variant={PC_PART_VARIANTS.UNSELECTED}
          handleSelect={handleSelect}
        />
      </BrowserRouter>
    );
    fireEvent.click(getByTestId('pc-part-select-button'));
    expect(handleSelect).toHaveBeenCalled();
  });
});
