import { readInputData } from "../../../../reader";
import { Network, parseInput } from "../shared";

const network = parseInput(readInputData(__dirname));
const steps = countSteps(network);
console.log(steps);

function countSteps(network: Network): number {
  const startNode = "AAA";
  const endNode = "ZZZ";
  const { nodeMap, directions } = network;
  const directionsEndIndex = directions.length - 1;
  let currentNode = startNode;
  let directionIndex = 0;
  let steps = 0;

  while (currentNode !== endNode) {
    steps++;
    const direction = directions[directionIndex];
    currentNode = nodeMap[currentNode][direction];
    directionIndex = directionIndex === directionsEndIndex ? 0 : directionIndex + 1;
  }

  return steps;
}
