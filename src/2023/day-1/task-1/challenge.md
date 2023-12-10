# Input and Output for Day 1 Challenge: Trebuchet and Calibration Values

## Input

- A calibration document consisting of lines of text.
- Each line originally contains a specific calibration value.
- Example lines from the document:
  - "1abc2"
  - "pqr3stu8vwx"
  - "a1b2c3d4e5f"
  - "treb7uchet"

## Expected Output

- Calculate the calibration value for each line by combining the first and last digit to form a two-digit number.
- Example outputs for the above lines:
  - "1abc2" → Calibration value: 12
  - "pqr3stu8vwx" → Calibration value: 38
  - "a1b2c3d4e5f" → Calibration value: 15
  - "treb7uchet" → Calibration value: 77
- Sum the calibration values of all lines in the document.
- For the example lines, the sum is 12 + 38 + 15 + 77 = 142.

## Final Task

- Calculate the total sum of all the calibration values in your calibration document.
