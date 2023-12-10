## Programming Challenge: Cube Bag Game Analysis

### Challenge Description:

You are given a series of games where cubes of different colors \(red, green, blue\) are revealed from a bag. Each game is identified by an ID and contains several rounds of cube reveals. Your task is to determine which games could have been possible if the bag had specific quantities of each colored cube.

### Input:

- Input is a series of games, each with an ID.
- Each game has a semicolon-separated list of subsets of cubes \(red, green, blue\) that were revealed.
- Example Input:
  ```
  Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
  Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
  Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
  Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
  Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green
  ```

### Task:

- Determine which games are possible if the bag contains only 12 red cubes, 13 green cubes, and 14 blue cubes.

### Expected Output:

- The output should be the sum of the IDs of the games that are possible with the given cube constraints.
- For the example input, the expected output would be `8` \(as games 1, 2, and 5 are possible\).

### Notes:

- A game is considered possible if, in every round of cube reveals, the number of cubes of each color does not exceed the given quantities.
- In the example, Game 3 is impossible due to revealing 20 red cubes at once, and Game 4 is impossible due to revealing 15 blue cubes at once.
