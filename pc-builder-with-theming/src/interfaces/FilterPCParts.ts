// Enums
import { BRAND_NAMES } from '@enums';

// Interfaces
import { IPCPart } from '@interfaces';

/**
 * @interface IFilterPCPartsByBrands - Interface of IFilterPCPartsByBrands helper.
 */
export interface IFilterPCPartsByBrands {
  result: IPCPart[];
  selectedBrands: BRAND_NAMES[];
}

/**
 * @interface IFilterPCPartsByPriceRange - Interface of IFilterPCPartsByPriceRange helper.
 */
export interface IFilterPCPartsByPriceRange {
  result: IPCPart[];
  minPrice: number;
  maxPrice: number;
}

/**
 * @interface IFilterPCParts - Interface of filterPCPart helper.
 */
export interface IFilterPCParts {
  pcPartsRawData: IPCPart[];
  selectedBrands: BRAND_NAMES[];
  minPrice: number;
  maxPrice: number;
  pageNumber: number;
}
