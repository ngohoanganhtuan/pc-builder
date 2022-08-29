import React from 'react';

// Components
import { RangeInput, Checkbox } from '@components';

// Enums
import { BRAND_NAMES } from '@enums';

/**
 * @type { Object }
 * @property { BRAND_NAMES[] } brands - Brands related to number of PC parts.
 * @property { BRAND_NAMES[] } selectedBrands - Selected brands.
 * @property { number } minPrice - Minimum price limit.
 * @property { number } maxPrice - Maximum price limit.
 * @property { Function } handleCheckboxChanged - A function handles when checkbox is changed.
 * @property { Function } handleMinChanged - A function handles when minimum price range is changed.
 * @property { Function } handleMaxChanged - A function handles when maximum price range is changed.
 */
type Props = {
  brands: BRAND_NAMES[];
  selectedBrands: BRAND_NAMES[];
  minPrice: number;
  maxPrice: number;
  handleCheckboxChanged: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleMinChanged: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleMaxChanged: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

/**
 * This component represents SelectPartFilter
 */
export const SelectPartFilter = ({
  brands = [],
  selectedBrands,
  minPrice,
  maxPrice,
  handleCheckboxChanged,
  handleMinChanged,
  handleMaxChanged,
}: Props): JSX.Element => {
  /**
   * @function isChecked - This function handle set check if brand is already in the list of selected brands.
   */
  const isChecked = (brand: BRAND_NAMES) => selectedBrands.indexOf(brand) !== -1;

  return (
    <div className="d-flex flex-column filter">
      <div className="mb-3">
        <p className="form-label filter-brand">Brand</p>
        <div className="d-flex flex-column flex-wrap">
          {brands.map((brand, index) => (
            <Checkbox
              id={`brand-checkbox-${index}`}
              key={brand}
              label={brand}
              value={brand}
              name={`brand-checkbox-${index}`}
              checked={isChecked(brand)}
              handleCheckboxChanged={handleCheckboxChanged}
            />
          ))}
        </div>
      </div>
      <div className="mb-3">
        <p className="form-label filter-price">Price range</p>
        <RangeInput
          minValue={minPrice}
          maxValue={maxPrice}
          handleMinChanged={handleMinChanged}
          handleMaxChanged={handleMaxChanged}
        />
      </div>
    </div>
  );
};
