## Programming Challenge: Engine Schematic Part Number Sum

### Challenge Description:

Your task is to analyze an engine schematic and calculate the sum of all "part numbers." A part number is defined as any number that is adjacent (including diagonally) to a symbol in the engine schematic. Symbols can be any character other than a period (`.').

### Input:

- A visual representation of an engine schematic.
- It consists of numbers and symbols.
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

- Identify all the part numbers in the schematic.
- A part number is any number adjacent to a symbol (excluding periods).
- Calculate the sum of all these part numbers.

### Expected Output:

- The output should be the sum of all the part numbers identified in the schematic.
- For the example input, the expected output is `4361`. This excludes the numbers `114` and `58` as they are not adjacent to a symbol.

### Notes:

- The actual engine schematic for the challenge will be larger than the example provided.
- Adjacency includes diagonal connections.
- Periods (`.') are not considered as symbols for determining part numbers.
