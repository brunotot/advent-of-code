import { readInputData, solveInputData } from "../../../../reader";
import { ColorData, parseGame } from "../shared";

const MAX_COLOR_SET: ColorData = {
  red: 12,
  green: 13,
  blue: 14,
};

console.log(solveInputData(readInputData(__dirname), solveHandler));

function solveHandler(line: string): number {
  return getGameIdIfValidOrZero(line);
}

function getGameIdIfValidOrZero(line: string): number {
  const game = parseGame(line);
  const isGameValid = game.datalist.every(colorData =>
    Object.entries(colorData).every(
      ([color, count]) => count <= MAX_COLOR_SET[color as keyof ColorData]
    )
  );
  return isGameValid ? game.id : 0;
}
