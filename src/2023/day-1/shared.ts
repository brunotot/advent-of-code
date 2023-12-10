export function getCalibrationValue(digits: string): number {
  return Number(`${digits.at(0)}${digits.at(-1)}`);
}
