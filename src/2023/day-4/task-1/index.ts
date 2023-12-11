import { readInputData, solveInputData } from "../../../../reader";

console.log(solveInputData(readInputData(__dirname), solveHandler));

function solveHandler(line: string): number {
  const card = parseCard(line);
  const winningCount = getWinningCount(card);
  return sumOfPowersOfTwo(winningCount);
}

type Card = {
  id: number;
  winningNumbers: number[];
  actualNumbers: number[];
};

function parseCard(line: string): Card {
  const [idStr, numbers] = line.split(":");
  const [winningNumbers, actualNumbers] = numbers
    .split("|")
    .map(numbers => numbers.trim().replace(/\s+/g, " ").split(" ").map(Number));
  return {
    id: Number(idStr.replace(/\D/g, "")),
    winningNumbers,
    actualNumbers,
  };
}

function sumOfPowersOfTwo(n: number): number {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let sum = 1;
  for (let i = 0; i < n - 1; i++) {
    sum += Math.pow(2, i);
  }
  return sum;
}

function getWinningCount(card: Card): number {
  return card.winningNumbers.reduce((acc, winningNumber) => {
    return card.actualNumbers.includes(winningNumber) ? acc + 1 : acc;
  }, 0);
}
