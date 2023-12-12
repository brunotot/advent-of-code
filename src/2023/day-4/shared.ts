export type Card = {
  id: number;
  winningNumbers: number[];
  actualNumbers: number[];
};

export function parseCard(line: string): Card {
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

export function getWinningCount(card: Card): number {
  return card.winningNumbers.reduce((acc, winningNumber) => {
    return card.actualNumbers.includes(winningNumber) ? acc + 1 : acc;
  }, 0);
}
