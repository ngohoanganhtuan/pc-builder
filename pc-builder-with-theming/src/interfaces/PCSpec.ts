// Enums
import { IPCPart } from '@interfaces';

/**
 * @interface PCSpec - Interface of PC part.
 */
// To-do: Use ? insteand of '| undefined'
export interface PCSpec {
  MAINBOARD: IPCPart | null;
  CPU: IPCPart | null;
  GPU: IPCPart | null;
  SSD: IPCPart | null;
  HDD: IPCPart | null;
  CASE: IPCPart | null;
  PSU: IPCPart | null;
  MOUSE: IPCPart | null;
  KEYBOARD: IPCPart | null;
  MONITOR: IPCPart | null;
  HEADSET: IPCPart | null;
}
