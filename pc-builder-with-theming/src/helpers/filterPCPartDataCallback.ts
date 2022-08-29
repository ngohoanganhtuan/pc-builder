import { IPCPart } from '@interfaces';

/**
 * @function filterPCPartDataCallback - This function tranforms data
 */
export const filterPCPartDataCallback = (key: string, value: string | number | undefined) => (data: IPCPart[]) =>
  data.filter((item) => item[key].toString() == value);
