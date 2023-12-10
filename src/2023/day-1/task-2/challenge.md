# Input and Output for the Programming Challenge

## Input

- A list of lines containing a mix of spelled-out digits and numeric digits.
- Spelled-out digits: "one", "two", "three", "four", "five", "six", "seven", "eight", "nine".
- Example lines from the challenge:
  - "two1nine"
  - "eightwothree"
  - "abcone2threexyz"
  - "xtwone3four"
  - "4nineeightseven2"
  - "zoneight234"
  - "7pqrstsixteen"

## Expected Output

- Identify the real first and last digit (numeric or spelled-out) on each line and convert them to their numeric form.
- Combine these digits to form a two-digit number for each line.
- Example outputs for the above lines:
  - "two1nine" → 29
  - "eightwothree" → 83
  - "abcone2threexyz" → 13
  - "xtwone3four" → 24
  - "4nineeightseven2" → 42
  - "zoneight234" → 14
  - "7pqrstsixteen" → 76
- Sum these two-digit numbers to find the total calibration value.
- For the example lines, the total sum is 29 + 83 + 13 + 24 + 42 + 14 + 76 = 281.

## Final Task

- Calculate the total sum of all the calibration values for your given list of lines.
