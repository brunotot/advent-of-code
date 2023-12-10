import { readInputData, solveInputData } from "../../../../reader";
import { isPartNumber, parseEngineRowNumbers } from "../shared";

console.log(solveInputData(readInputData(__dirname), solveHandler));

function solveHandler(line: string, row: number, matrix: string[]): number {
  return parseEngineRowNumbers(line, row)
    .filter(engineNumber => isPartNumber(engineNumber, matrix))
    .map(({ value }) => value)
    .reduce((acc, value) => acc + value, 0);
}
