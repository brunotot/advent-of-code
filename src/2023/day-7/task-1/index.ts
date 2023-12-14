import { readInputData } from "../../../../reader";
import {
  PlayingCard,
  getHandResultSorter,
  getHandTypeValue,
  getResult,
  parseInput,
} from "../shared";

// prettier-ignore
const CARD_VALUE_MAP: Record<PlayingCard, number> = {
  "2": 1,
  "3": 2,
  "4": 3,
  "5": 4,
  "6": 5,
  "7": 6,
  "8": 7,
  "9": 8,
  "T": 9,
  "J": 10,
  "Q": 11,
  "K": 12,
  "A": 13,
};

console.log(
  getResult(
    parseInput(readInputData(__dirname)).sort(
      getHandResultSorter(CARD_VALUE_MAP, ({ hand }) => ({
        hand,
        type: getHandTypeValue(hand, CARD_VALUE_MAP),
      }))
    )
  )
);
