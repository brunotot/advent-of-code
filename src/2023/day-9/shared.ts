export type ReducerFn = (acc: number, nums: number[]) => number;

export function parseInput(lines: string[]): number[][] {
  return lines.map(line => line.split(" ").map(Number));
}

export function getHistoryValue(nums: number[], reducerFn: ReducerFn): number {
  let numsCopy = [[...nums]];

  while (!numsCopy.at(-1)!.every(num => num === 0)) {
    const latestNums = numsCopy.at(-1)!;

    const newNums: number[] = [];
    for (let i = 1; i < latestNums.length; i++) {
      newNums.push(latestNums[i] - latestNums[i - 1]);
    }
    numsCopy.push(newNums);
  }

  const numsCopyReversed = [...numsCopy].reverse();
  const historyValue = numsCopyReversed.reduce((acc, nums) => reducerFn(acc, nums), 0);
  return historyValue;
}
