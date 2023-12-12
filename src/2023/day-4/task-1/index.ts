import { readInputData, solveInputData } from "../../../../reader";
import { getWinningCount, parseCard } from "../shared";

console.log(solveInputData(readInputData(__dirname), solveHandler));

function solveHandler(line: string): number {
  const card = parseCard(line);
  const winningCount = getWinningCount(card);
  return sumOfPowersOfTwo(winningCount);
}

function sumOfPowersOfTwo(n: number): number {
  if (n <= 1) return n;
  return Array.from({ length: n - 1 }).reduce((acc: number, _, i) => acc + Math.pow(2, i), 1);
}
