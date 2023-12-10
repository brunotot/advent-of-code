import { readInputData } from "../../../../reader";
import {
  EngineNumber,
  Position,
  getAdjacentPositions,
  isPartNumber,
  parseEngineRowNumbers,
} from "../shared";

console.log(solveHandler(readInputData(__dirname)));

function solveHandler(matrix: string[]): number {
  const map: Map<EngineNumber, Position[]> = getEngineNumberGearPositionsMap(matrix);
  const gears: Position[] = getEngineNumberGearPositions(map);
  const res: Map<Position, number[]> = new Map();

  // TODO: Refactor this into separate function.
  gears.forEach(gearPosition => {
    map.forEach((positions, engineNumber) => {
      if (shallowIncludes(positions, gearPosition)) {
        const engineNumberValues: number[] = res.get(gearPosition) ?? [];
        engineNumberValues.push(engineNumber.value);
        res.set(gearPosition, engineNumberValues);
      }
    });
  });

  return Array.from(res.values())
    .filter(arr => arr.length === 2)
    .reduce((acc, [v1, v2]) => acc + v1 * v2, 0);
}

function getEnginePartNumbers(matrix: string[]): EngineNumber[] {
  return matrix
    .map((line, row) => parseEngineRowNumbers(line, row))
    .filter(data => data.filter(num => isPartNumber(num, matrix)))
    .flat();
}

function getEngineNumberGearPositionsMap(matrix: string[]): Map<EngineNumber, Position[]> {
  const engineNumberGearPositions: Map<EngineNumber, Position[]> = new Map();
  getEnginePartNumbers(matrix).forEach(engineNumber => {
    getAdjacentPositions(engineNumber, matrix).forEach(pos => {
      const { row, col } = pos;
      if (matrix[row][col] === "*") {
        engineNumberGearPositions.set(engineNumber, [
          ...(engineNumberGearPositions.get(engineNumber) ?? []),
          pos,
        ]);
      }
    });
  });
  return engineNumberGearPositions;
}

function getEngineNumberGearPositions(
  engineNumberGearMap: Map<EngineNumber, Position[]>
): Position[] {
  return shallowUnique(Array.from(engineNumberGearMap.values()).flat());
}

function shallowUnique<T extends any[]>(array: T): T {
  const unique = new Set<string>();
  array.forEach(item => unique.add(JSON.stringify(item)));
  return [...unique].map(item => JSON.parse(item)) as T;
}

function shallowIncludes(array: any[], value: any): boolean {
  return array.some(item => JSON.stringify(item) === JSON.stringify(value));
}
