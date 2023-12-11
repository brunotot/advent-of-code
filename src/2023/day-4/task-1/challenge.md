## Input Format

- Each card has two lists of numbers separated by a vertical bar (`|`):
  - The first list is the winning numbers.
  - The second list is the numbers you have.
- The cards are provided in a table format.

## Example Input

```
Card 1: 41 48 83 86 17 | 83 86 6 31 17 9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3: 1 21 53 59 44 | 69 82 63 72 16 21 14 1
Card 4: 41 92 73 84 69 | 59 84 76 51 58 5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11
```

## Output Format

- Calculate the total points based on the matching numbers:
  - The first match on a card is worth 1 point.
  - Each subsequent match on the same card doubles the point value.
  - Total all points from each card.

## Example Output

- In the provided example, the total points are `13`.
