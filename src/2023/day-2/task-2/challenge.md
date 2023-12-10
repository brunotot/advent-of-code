## Programming Challenge: Minimum Cube Sets and Their Power

### Challenge Description:

In this challenge, you are given records of games where cubes of different colors (red, green, blue) are used. Your task is to determine the minimum number of cubes of each color that must have been present in the bag for each game to be possible. Then, calculate the power of these sets, which is the product of the numbers of red, green, and blue cubes, and sum up these powers for all games.

### Input:

- A series of games, each identified by an ID.
- Each game has a semicolon-separated list of subsets of cubes (red, green, blue) that were revealed.
- Example Input:
  ```
  Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
  Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
  Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
  Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
  Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green
  ```

### Task:

- Determine the minimum number of each color of cubes that must have been in the bag for each game.
- Calculate the power of each minimum set of cubes (product of red, green, and blue cubes).
- Sum up these powers for all games.

### Expected Output:

- The output should be the sum of the power of the minimum sets of cubes for all games.
- Based on the example input, the expected output is `2286`. This is calculated as follows:
  ```
  Game 1: Power = 4 (red) * 2 (green) * 6 (blue) = 48
  Game 2: Power = 1 * 3 * 4 = 12
  Game 3: Power = 20 * 13 * 6 = 1560
  Game 4: Power = 14 * 3 * 15 = 630
  Game 5: Power = 6 * 3 * 2 = 36
  Total Sum = 48 + 12 + 1560 + 630 + 36 = 2286
  ```

### Notes:

- A game is considered possible if the minimum number of cubes for each color is present in all rounds of the game.
