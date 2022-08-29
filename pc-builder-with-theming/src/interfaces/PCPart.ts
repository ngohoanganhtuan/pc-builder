// Enums
import { BRAND_NAMES, PC_PART_TYPES } from '@enums';

/**
 * @interface IPCPart - Interface of PC part.
 */
export interface IPCPart {
  [key: string]: string | number | PC_PART_TYPES | BRAND_NAMES;
  name: string;
  price: number;
  thumbnail: string;
  id: number;
  type: PC_PART_TYPES;
  brandName: BRAND_NAMES;
}
