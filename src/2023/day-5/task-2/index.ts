import { readInputData } from "../../../../reader";
import { convertSeedToLocation, parseData } from "../shared";

console.log(solveMinLocation(readInputData(__dirname)));

function solveMinLocation(lines: string[]): number {
  const DATA = parseData(lines);
  const seeds = DATA.seeds;
  const seedsGrouped = Array.from({ length: seeds.length / 2 }, (_, i) =>
    seeds.slice(i * 2, i * 2 + 2)
  );

  let minLocation = Infinity;
  for (let i = 0; i < seedsGrouped.length; i++) {
    console.log(`${i + 1}/${seedsGrouped.length}`);
    let [start, count] = seedsGrouped[i];
    while (count > 0) {
      const seedNumber = start + count - 1;
      const location = convertSeedToLocation(DATA, seedNumber);
      if (location < minLocation) minLocation = location;
      count--;
    }
  }

  return minLocation;
}
