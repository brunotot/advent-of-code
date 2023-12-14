export type PlayerHand = {
  hand: string;
  bid: number;
};

export type HandResultSortComponent = {
  hand: string;
  type: number;
};

export const PLAYING_CARDS = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "T",
  "J",
  "Q",
  "K",
  "A",
] as const;

export type PlayingCard = (typeof PLAYING_CARDS)[number];

export const HandStrength = {
  HIGH_CARD: 1,
  ONE_PAIR: 2,
  TWO_PAIR: 3,
  THREE_OF_KIND: 4,
  FULL_HOUSE: 5,
  FOUR_OF_KIND: 6,
  FIVE_OF_KIND: 7,
} as const;

export type SortComponentConverter<T> = (from: T) => HandResultSortComponent;

export function getResult(playerHands: PlayerHand[]): number {
  return playerHands.reduce((acc, { bid }, index) => acc + bid * (index + 1), 0);
}

export function getHandResultSorter<T = HandResultSortComponent>(
  cardValueMap: Record<PlayingCard, number>,
  sortComponentConverter: SortComponentConverter<T> = (a: T) => a as HandResultSortComponent
) {
  return (nativeA: T, nativeB: T) => {
    const a = sortComponentConverter(nativeA);
    const b = sortComponentConverter(nativeB);
    if (a.type === b.type) {
      for (let i = 0; i < a.hand.length; i++) {
        const cardA = a.hand[i] as PlayingCard;
        const cardB = b.hand[i] as PlayingCard;
        if (cardA === cardB) continue;
        return cardValueMap[cardA] - cardValueMap[cardB];
      }
    }
    return a.type - b.type;
  };
}

export function parseInput(lines: string[]): PlayerHand[] {
  return lines.map(line => {
    const [hand, bid] = line.split(" ");
    return { hand, bid: Number(bid) };
  });
}

export function getHandTypeValue(hand: string, cardValueMap: Record<PlayingCard, number>): number {
  const cards = hand.split("") as PlayingCard[];
  const cardsSorted = cards.sort((a, b) => cardValueMap[b] - cardValueMap[a]);
  const cardsUnique = [...new Set(cardsSorted)];
  const getCharCount = (str: string, char: string) => str.split(char).length - 1;
  const getCardCount = (char: string) => getCharCount(hand, char);

  if (cardsUnique.length === 5) {
    return HandStrength.HIGH_CARD;
  }

  if (cardsUnique.length === 4) {
    return HandStrength.ONE_PAIR;
  }

  if (cardsUnique.length === 3) {
    const isThreeOfKind = cardsUnique.some(c => getCardCount(c) === 3);
    return isThreeOfKind ? HandStrength.THREE_OF_KIND : HandStrength.TWO_PAIR;
  }

  if (cardsUnique.length === 2) {
    const isFourOfKind = cardsUnique.some(c => getCardCount(c) === 4);
    return isFourOfKind ? HandStrength.FOUR_OF_KIND : HandStrength.FULL_HOUSE;
  }

  return HandStrength.FIVE_OF_KIND;
}
