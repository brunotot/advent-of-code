import { readInputData } from "../../../../reader";
import { Card, getWinningCount, parseCard } from "../shared";

/*

  Example input:

  Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
  Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
  Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
  Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
  Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
  Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11

  Winning copies by card number: 
  
  {
    1: [2, 3, 4, 5],
    2: [3, 4],
    3: [4, 5],
    4: [5],
    5: [],
    6: [],
  }

  Solution:

  Step 1: Count all original cards
  Result: 6

  Step 2: Count all values of each card recursively
  Result: 14 + 6 + 3 + 1 = 24

        card 1:  value 2:   7 copies
        card 1:  value 3:   4 copies
        card 1:  value 4:   2 copies
        card 1:  value 5:   1 copies
        ----------------------------
        card 1:    total:  14 copies

        card 2:  value 3:   4 copies
        card 2:  value 4:   2 copies
        ----------------------------
        card 2:    total:   6 copies

        card 3:  value 4:   2 copies
        card 3:  value 5:   1 copies
        ----------------------------
        card 3:    total:   3 copies

        card 4:  value 5:   1 copies
        ----------------------------
        card 4:    total:   1 copies

  Step 3: Add all values together
  Result: 6 + 24 = 30
  
*/

function getTotalCardCount(): number {
  function getRecursiveCardCount(card: Card, currIdx: number): number {
    const rootWins = getWinningCount(card);
    if (rootWins === 0) return 0;
    const winIndices = Array.from({ length: rootWins }, (_, i) => currIdx + i + 1);
    const childWins = winIndices.reduce((acc, i) => acc + getRecursiveCardCount(cards[i], i), 0);
    return rootWins + childWins;
  }

  // Step 0: Parse input
  const cards: Card[] = readInputData(__dirname).map(parseCard);

  // Step 1: Count all original cards
  const originalCardCount = cards.length;

  // Step 2: Count all values of each card recursively
  const copyCardCount = cards.reduce((acc, c, i) => acc + getRecursiveCardCount(c, i), 0);

  // Step 3: Add all values together
  return originalCardCount + copyCardCount;
}

console.log(getTotalCardCount());
