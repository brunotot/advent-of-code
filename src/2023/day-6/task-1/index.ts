import { readInputData } from "../../../../reader";
import { Race, solveOne } from "../shared";

const INPUT = readInputData(__dirname);
const parsedData = parseInput(INPUT);
console.log(parsedData.reduce((acc, race) => solveOne(race) * acc, 1));

function parseInput(lines: string[]): Race[] {
  const parseLine = (line: string) =>
    line.split(":")[1].trim().replace(/\s+/g, " ").split(" ").map(Number);
  const times = parseLine(lines[0]);
  const recordLengths = parseLine(lines[1]);
  return times.map((time, index) => ({ time, recordLength: recordLengths[index] }));
}
