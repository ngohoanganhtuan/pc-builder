// Enums
import { PC_PART_TYPES } from '@enums';

/**
 * @function getPCPartTypeEnumKeyByValue - This function handles get PC part type key by value.
 * @returns { string }
 */
export const getPCPartTypeEnumKeyByValue = (value: PC_PART_TYPES) => {
  return Object.keys(PC_PART_TYPES)[Object.values(PC_PART_TYPES).findIndex((enumValue) => enumValue === value)];
};
