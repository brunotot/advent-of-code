import { readInputData } from "../../../../reader";
import { Race, solveOne } from "../shared";

const INPUT = readInputData(__dirname);
const parsedData = parseInput(INPUT);
console.log(solveOne(parsedData));

function parseInput(lines: string[]): Race {
  const parseLine = (line: string) =>
    Number(line.split(":")[1].trim().replace(new RegExp(" ", "g"), ""));
  const time = parseLine(lines[0]);
  const recordLength = parseLine(lines[1]);
  return { time, recordLength };
}
