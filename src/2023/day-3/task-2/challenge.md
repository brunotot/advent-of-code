## Programming Challenge: Calculating Gear Ratios in Engine Schematic

### Challenge Description:

In this challenge, you need to analyze an engine schematic to find all the gears and calculate their gear ratios. A gear is defined as any `*` symbol that is adjacent to exactly two part numbers. The gear ratio is calculated by multiplying these two adjacent part numbers. Your task is to sum up all these gear ratios.

### Input:

- A visual representation of an engine schematic with numbers and symbols.
- Example Input:
  ```
  467..114..
  ...*......
  ..35..633.
  ......#...
  617*......
  .....+.58.
  ..592.....
  ......755.
  ...$.*....
  .664.598..
  ```

### Task:

- Identify all the gears in the schematic. A gear is a `*` symbol adjacent to exactly two part numbers.
- Calculate the gear ratio for each gear by multiplying the two adjacent part numbers.
- Sum up all the gear ratios.

### Expected Output:

- The output should be the sum of all gear ratios in the schematic.
- For the example input, the expected output is `467835`. This includes the gear ratios `16345` (from 467 and 35) and `451490` (from 664 and 598). The `*` near 617 is not counted as it's adjacent to only one part number.

### Notes:

- Adjacency includes diagonal connections.
- Only `*` symbols adjacent to exactly two part numbers are considered gears.
