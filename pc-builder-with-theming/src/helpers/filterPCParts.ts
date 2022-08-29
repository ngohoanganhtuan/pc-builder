// Interfaces
import { IFilterPCParts, IFilterPCPartsByBrands, IFilterPCPartsByPriceRange, IPCPart } from '@interfaces';

/**
 * @function filterPCPartsByBrands - This function handles filter pc parts by brands.
 * @returns { IPCPart[] }
 */
export const filterPCPartsByBrands = ({ result, selectedBrands }: IFilterPCPartsByBrands): IPCPart[] => {
  return selectedBrands.length > 0
    ? result.filter((pcPart) => selectedBrands.indexOf(pcPart.brandName) !== -1)
    : result;
};

/**
 * @function filterPCPartsByPriceRange - This function handles filter pc parts by price range.
 * @returns { IPCPart[] }
 */
export const filterPCPartsByPriceRange = ({ result, minPrice, maxPrice }: IFilterPCPartsByPriceRange): IPCPart[] => {
  return minPrice || maxPrice
    ? result.filter((pcPart) => pcPart.price >= minPrice && pcPart.price <= maxPrice)
    : result;
};

/**
 * @function filterPCParts - This function handles filter pc parts.
 * @returns { IPCPart[] }
 */
export const filterPCParts = ({
  pcPartsRawData,
  selectedBrands,
  minPrice,
  maxPrice,
  pageNumber,
}: IFilterPCParts): IPCPart[] => {
  let result: IPCPart[] = pcPartsRawData;
  // Filter PC parts by brands
  result = filterPCPartsByBrands({ result, selectedBrands });
  // Filter PC Parts by price range
  result = filterPCPartsByPriceRange({ result, minPrice, maxPrice });
  // If pageNumber 1, we get 10 items. If pageNumber 2, we get 20 items (2*10).
  result = result.slice(0, pageNumber * 10);

  return result;
};
