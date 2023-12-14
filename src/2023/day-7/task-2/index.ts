import { readInputData } from "../../../../reader";
import {
  PLAYING_CARDS,
  PlayingCard,
  getHandResultSorter,
  getHandTypeValue,
  getResult,
  parseInput,
} from "../shared";

// prettier-ignore
const CARD_VALUE_MAP: Record<PlayingCard, number> = {
  "J": 1,
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  "T": 10,
  "Q": 11,
  "K": 12,
  "A": 13,
};

console.log(
  getResult(
    parseInput(readInputData(__dirname)).sort(
      getHandResultSorter(CARD_VALUE_MAP, ({ hand }) => ({
        hand,
        type: getHandTypeValue(replaceJokersForBestHand(hand), CARD_VALUE_MAP),
      }))
    )
  )
);

function replaceJokersForBestHand(hand: string): string {
  const JOKER_CARD = "J";

  const getAllIndices = (str: string, subStr: string) =>
    [...str.matchAll(new RegExp(subStr, "g"))].map(({ index }) => index) as number[];

  const replaceCharAt = (str: string, index: number, char: string) =>
    str.substring(0, index) + char + str.substring(index + 1);

  function normalizeJokersHand(hand: string): string {
    const jokerIndices = getAllIndices(hand, JOKER_CARD);
    if (jokerIndices.length === 0) return hand;
    const handsWithWildCards: string[] = [];

    for (const card of PLAYING_CARDS) {
      let handWithWildCards = hand;
      for (const jokerIndex of jokerIndices) {
        handWithWildCards = replaceCharAt(handWithWildCards, jokerIndex, card);
        handsWithWildCards.push(handWithWildCards);
      }
    }

    const handsWithWildCardsSorted = handsWithWildCards.sort((a, b) => {
      const handTypeA = getHandTypeValue(a, CARD_VALUE_MAP);
      const handTypeB = getHandTypeValue(b, CARD_VALUE_MAP);
      const sorter = getHandResultSorter(CARD_VALUE_MAP);
      return sorter({ hand, type: handTypeA }, { hand, type: handTypeB });
    });

    return handsWithWildCardsSorted.at(-1)!;
  }

  return normalizeJokersHand(hand);
}
