## Input:

- Initial `seeds` are provided in ranges where each pair of values represents a start of a range and the length of the range.

## Example Input:

- Seeds: `79 14 55 13`
  - This line describes two ranges of seed numbers:
    - First range: Starts with seed number 79 and includes 14 values (79, 80, ..., 91, 92).
    - Second range: Starts with seed number 55 and includes 13 values (55, 56, ..., 66, 67).
  - Total seeds to consider: 27 seed numbers.

## Task:

- Consider all seed numbers listed in the ranges on the first line of the almanac.
- Convert each seed number through a series of categories (soil, fertilizer, water, light, temperature, humidity, location) using provided maps.
- Find the lowest location number that corresponds to any of the initial seed numbers.

## Output:

- The lowest location number that corresponds to any of the initial seed numbers after conversion through the maps.

## Example Output:

- In the provided example, the lowest location number can be obtained from seed number 82, which leads to location number 46.
- Therefore, the lowest location number is 46.

## Notes:

- The conversion maps and method are similar to the previous challenge but applied to a broader range of seed numbers.
