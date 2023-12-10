import { readInputData, solveInputData } from "../../../../reader";
import { ColorData, parseGame } from "../shared";

console.log(solveInputData(readInputData(__dirname), solveHandler));

function solveHandler(line: string): number {
  return getColorSetPower(line);
}

function getColorSetPower(line: string): number {
  const { datalist } = parseGame(line);
  return ["red", "green", "blue"].reduce((acc, color) => {
    return acc * Math.max(...datalist.map(v => v[color as keyof ColorData]));
  }, 1);
}
