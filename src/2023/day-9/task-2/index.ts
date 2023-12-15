import { readInputData } from "../../../../reader";
import { getHistoryValue, parseInput } from "../shared";

const input = parseInput(readInputData(__dirname));
const result = input.reduce(
  (acc, nums) => acc + getHistoryValue(nums, (acc, nums) => nums.at(0)! - acc),
  0
);
console.log(result);
