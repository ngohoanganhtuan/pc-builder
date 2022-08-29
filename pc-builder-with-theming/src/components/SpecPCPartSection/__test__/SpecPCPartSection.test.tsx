import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render } from '@testing-library/react';
import * as renderer from 'react-test-renderer';

// Components
import { SpecPCPartSection } from '@components';

// Enums
import { BRAND_NAMES, PC_PART_TYPES } from '@enums';

describe('Test [SpecPCPartSection] component', () => {
  const handleRemovePCPart = jest.fn();
  const handleIncreaseQuantity = jest.fn();
  const handleDecreaseQuantity = jest.fn();
  const handleOpenModal = jest.fn();

  test('Component [SpecPCPartSection] should render correctly when it has PC part data', () => {
    const component = renderer
      .create(
        <BrowserRouter>
          <SpecPCPartSection
            pcPartTypeName={PC_PART_TYPES.CPU}
            pcPartData={{
              id: 0,
              name: 'Intel i3',
              brandName: BRAND_NAMES.INTEL,
              price: 1200000,
              thumbnail: 'PC Part Thumbnail',
              type: PC_PART_TYPES.CPU,
            }}
            quantity={500}
            handleRemovePCPart={handleRemovePCPart}
            handleIncreaseQuantity={handleIncreaseQuantity}
            handleDecreaseQuantity={handleDecreaseQuantity}
            handleOpenModal={handleOpenModal}
          />
        </BrowserRouter>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  test('Component [SpecPCPartSection] should render correctly when it does not have pc part data', () => {
    const component = renderer
      .create(
        <BrowserRouter>
          <SpecPCPartSection
            pcPartTypeName={PC_PART_TYPES.CPU}
            quantity={500}
            handleRemovePCPart={handleRemovePCPart}
            handleIncreaseQuantity={handleIncreaseQuantity}
            handleDecreaseQuantity={handleDecreaseQuantity}
            handleOpenModal={handleOpenModal}
          />
        </BrowserRouter>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  test('Component [SpecPCPartSection] calls function remove when user click remove button', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <SpecPCPartSection
          pcPartTypeName={PC_PART_TYPES.CPU}
          pcPartData={{
            id: 0,
            name: 'Intel i3',
            brandName: BRAND_NAMES.INTEL,
            price: 1200000,
            thumbnail: 'PC Part Thumbnail',
            type: PC_PART_TYPES.CPU,
          }}
          quantity={500}
          handleRemovePCPart={handleRemovePCPart}
          handleIncreaseQuantity={handleIncreaseQuantity}
          handleDecreaseQuantity={handleDecreaseQuantity}
          handleOpenModal={handleOpenModal}
        />
      </BrowserRouter>
    );
    fireEvent.click(getByTestId('pc-part-remove-button'));
    expect(handleRemovePCPart).toHaveBeenCalled();
  });

  test('Component [SpecPCPartSection] calls function increase when user click increase button', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <SpecPCPartSection
          pcPartTypeName={PC_PART_TYPES.CPU}
          pcPartData={{
            id: 0,
            name: 'Intel i3',
            brandName: BRAND_NAMES.INTEL,
            price: 1200000,
            thumbnail: 'PC Part Thumbnail',
            type: PC_PART_TYPES.CPU,
          }}
          quantity={500}
          handleRemovePCPart={handleRemovePCPart}
          handleIncreaseQuantity={handleIncreaseQuantity}
          handleDecreaseQuantity={handleDecreaseQuantity}
          handleOpenModal={handleOpenModal}
        />
      </BrowserRouter>
    );
    fireEvent.click(getByTestId('increase-quantity-button'));
    expect(handleIncreaseQuantity).toHaveBeenCalled();
  });

  test('Component [SpecPCPartSection] calls function decrease when user click decrease button', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <SpecPCPartSection
          pcPartTypeName={PC_PART_TYPES.CPU}
          pcPartData={{
            id: 0,
            name: 'Intel i3',
            brandName: BRAND_NAMES.INTEL,
            price: 1200000,
            thumbnail: 'PC Part Thumbnail',
            type: PC_PART_TYPES.CPU,
          }}
          quantity={500}
          handleRemovePCPart={handleRemovePCPart}
          handleIncreaseQuantity={handleIncreaseQuantity}
          handleDecreaseQuantity={handleDecreaseQuantity}
          handleOpenModal={handleOpenModal}
        />
      </BrowserRouter>
    );
    fireEvent.click(getByTestId('decrease-quantity-button'));
    expect(handleDecreaseQuantity).toHaveBeenCalled();
  });

  test('Component [SpecPCPartSection] calls function open modal when user click select button', () => {
    const handleOpenModal = jest.fn();
    const { getByRole } = render(
      <BrowserRouter>
        <SpecPCPartSection
          pcPartTypeName={PC_PART_TYPES.CPU}
          quantity={500}
          handleRemovePCPart={handleRemovePCPart}
          handleIncreaseQuantity={handleIncreaseQuantity}
          handleDecreaseQuantity={handleDecreaseQuantity}
          handleOpenModal={handleOpenModal}
        />
      </BrowserRouter>
    );
    const button = getByRole('button');
    fireEvent.click(getByRole('button'));
    expect(button.textContent).toEqual('Select');
    expect(handleOpenModal).toHaveBeenCalled();
  });
});
