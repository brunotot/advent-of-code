export type Position = {
  row: number;
  col: number;
};

export type EngineNumber = Position & {
  value: number;
  digits: number;
};

export function parseEngineRowNumbers(line: string, row: number): EngineNumber[] {
  return Array.from(line.matchAll(/\d+/g))
    .map(match => ({
      digits: match[0].length,
      value: Number(match[0]),
      row,
      col: match.index ?? -1,
    }))
    .filter(({ col }) => col > -1);
}

export function isSymbol(char: string): boolean {
  return !(char >= "0" && char <= "9") && char !== ".";
}

export function isPartNumber(engineNumber: EngineNumber, matrix: string[]): boolean {
  const checkPositions = getAdjacentPositions(engineNumber, matrix);
  return checkPositions.some(({ row, col }) => isSymbol(matrix[row][col]));
}

export function getAdjacentPositions(engineNumber: EngineNumber, matrix: string[]): Position[] {
  const { row, col, digits } = engineNumber;
  const maxRow = matrix.length - 1;
  const maxCol = matrix[0].length - 1;

  const topPositions: Position[] = Array.from({ length: digits + 2 }).map((_, index) => ({
    row: row - 1,
    col: col - 1 + index,
  }));

  const midPositions: Position[] = [
    { row, col: col - 1 },
    { row, col: col + digits },
  ];

  const bottomPositions: Position[] = Array.from({ length: digits + 2 }).map((_, index) => ({
    row: row + 1,
    col: col - 1 + index,
  }));

  return [...topPositions, ...midPositions, ...bottomPositions].filter(
    ({ col, row }) => col >= 0 && col <= maxCol && row >= 0 && row <= maxRow
  );
}
