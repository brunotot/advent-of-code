import { readInputData } from "../../../../reader";
import { convertSeedToLocation, parseData } from "../shared";

console.log(solveMinLocation(readInputData(__dirname)));

function solveMinLocation(lines: string[]): number {
  const DATA = parseData(lines);
  return Math.min(...DATA.seeds.map(seed => convertSeedToLocation(DATA, seed)));
}
