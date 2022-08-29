import database from '@database.json';

// Interfaces
import { IPCPart } from '@interfaces';

/**
 * @function getPCPartsFromDatabaseJSON - This function helps getting pcParts from database.json
 */
export const getPCPartsFromDatabaseJSON = () => {
  const { pcParts } = database;
  return pcParts as IPCPart[];
};
