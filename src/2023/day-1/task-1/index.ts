import { readInputData, solveInputData } from "../../../../reader";
import { getCalibrationValue } from "../shared";

console.log(solveInputData(readInputData(__dirname), solveHandler));

function solveHandler(line: string): number {
  return getCalibrationValue(getCalibrationDigits(line));
}

function getCalibrationDigits(line: string): string {
  return line.replace(/\D/g, "");
}
