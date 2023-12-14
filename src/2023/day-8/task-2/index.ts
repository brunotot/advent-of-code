import { readInputData } from "../../../../reader";
import { Direction, Network, parseInput } from "../shared";

const network = parseInput(readInputData(__dirname));
const steps = countSteps(network);
console.log(steps);

function countSteps(network: Network): number {
  /** Calculates the greatest common divisor (GCD) of two numbers. */
  function gcd(a: number, b: number): number {
    while (b !== 0) {
      let t = b;
      b = a % b;
      a = t;
    }
    return a;
  }

  /** Calculates the least common multiple (LCM) of two numbers. */
  function lcm(a: number, b: number): number {
    return (a * b) / gcd(a, b);
  }

  const { directions, nodeMap } = network;
  const positions = Object.keys(nodeMap).filter(key => key.endsWith("A")) as Direction[];
  const cycles: number[][] = [];

  positions.forEach(current => {
    let cycle: number[] = [];
    let currentSteps = directions;
    let stepCount = 0;
    let firstZ: string | null = null;

    while (true) {
      while (stepCount === 0 || !current.endsWith("Z")) {
        stepCount++;
        current = nodeMap[current][currentSteps[0]];
        currentSteps = [...currentSteps.slice(1), currentSteps[0]];
      }

      cycle.push(stepCount);

      if (firstZ === null) {
        firstZ = current;
        stepCount = 0;
      } else if (current === firstZ) {
        break;
      }
    }

    cycles.push(cycle);
  });

  const nums = cycles.map(([num]) => num);
  let result = nums.pop() ?? 1;
  return nums.reduce((acc, num) => lcm(acc, num), result);
}
