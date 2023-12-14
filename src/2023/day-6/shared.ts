export type Race = {
  time: number;
  recordLength: number;
};

export function solveOne(race: Race): number {
  const getNumberOfCombinations = ({ time, recordLength }: Race) => {
    return Array.from<number>({ length: time }).reduce((acc, _, speed) => {
      const raceDistance = time - speed;
      const lengthPassed = raceDistance * speed;
      return acc + (lengthPassed > recordLength ? 1 : 0);
    }, 0);
  };
  return getNumberOfCombinations(race);
}
