// Interfaces
import { IPCPart } from '@interfaces';

// Enums
import { BRAND_NAMES } from '@enums';

/**
 * @function getBrandsRelatedToPCParts - This function handles get brands related to PC parts.
 * @returns { string }
 */

export const getBrandsRelatedToPCParts = (pcPartsRawData: IPCPart[] = []): BRAND_NAMES[] => {
  const result: BRAND_NAMES[] = [];
  pcPartsRawData.forEach((pcPart: IPCPart) => {
    result.indexOf(pcPart.brandName) === -1 && result.push(pcPart.brandName);
  });
  return result;
};
