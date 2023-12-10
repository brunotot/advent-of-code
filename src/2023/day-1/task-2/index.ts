import { readInputData, solveInputData } from "../../../../reader";
import { getCalibrationValue } from "../shared";

console.log(solveInputData(readInputData(__dirname), solveHandler));

function solveHandler(line: string): number {
  return getCalibrationValue(getCalibrationDigits(line));
}

function getCalibrationDigits(line: string): string {
  const digits = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

  const getAllIndices = (str: string, subStr: string) =>
    [...str.matchAll(new RegExp(subStr, "g"))].map(({ index }) => [index, subStr] as const);

  const insertCharAt = (str: string, index: number, char: string) =>
    str.substring(0, index) + char + str.substring(index);

  return digits
    .flatMap(digit => getAllIndices(line, digit))
    .sort(([a], [b]) => a! - b!)
    .reduce((acc, [p, d], i) => insertCharAt(acc, p! + i, `${digits.indexOf(d) + 1}`), line)
    .replace(/\D/g, "");
}
