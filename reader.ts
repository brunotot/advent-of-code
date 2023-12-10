import * as fs from "fs";
import * as path from "path";

export function readInputData(dir: string): string[] {
  return fs.readFileSync(path.join(dir, "input.txt"), "utf8").split("\n");
}

export function solveInputData(
  inputData: string[],
  solveFn: (line: string, index: number, array: string[]) => number
): number {
  return inputData.reduce((acc, line, index) => acc + solveFn(line, index, inputData), 0);
}
