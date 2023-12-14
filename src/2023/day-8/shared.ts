export type Direction = "L" | "R";

export type Node = {
  L: Direction;
  R: Direction;
};

export type NodeMap = Record<string, Node>;

export type Network = {
  directions: Direction[];
  nodeMap: NodeMap;
};

export function parseInput(lines: string[]): Network {
  const removeNonAlphaNumericChars = (str: string) => str.replace(/[^a-zA-Z0-9]/g, "");
  return {
    directions: lines[0].split("") as Direction[],
    nodeMap: lines.slice(2).reduce((acc, line) => {
      const [node, leftRightDirections] = line.split(" = ");
      const [left, right] = leftRightDirections.split(",").map(removeNonAlphaNumericChars);
      acc[node] = { L: left as Direction, R: right as Direction };
      return acc;
    }, {} as NodeMap),
  };
}
