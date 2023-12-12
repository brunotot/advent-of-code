## Input:

- A list of seeds.
- Maps for converting numbers from one category to another in the following order:
  - Seed to Soil
  - Soil to Fertilizer
  - Fertilizer to Water
  - Water to Light
  - Light to Temperature
  - Temperature to Humidity
  - Humidity to Location
- Each map contains lines with three numbers: destination range start, source range start, and the range length.

## Example Input:

- Seeds: `79 14 55 13`
- Seed-to-Soil Map:

```
50 98 2
52 50 48
```

- Soil-to-Fertilizer Map, Fertilizer-to-Water Map, etc. (follow the same format as Seed-to-Soil Map).

## Output:

- Find the lowest location number that corresponds to any of the initial seed numbers after converting each seed number through other categories.

## Example Output:

- Given the seed-to-soil map and other maps in the challenge, the output for seeds `79 14 55 13` would be the lowest location number after conversion through the maps.

## Notes:

- Each line in a map means that the source range starts at the second number and contains a number of values equal to the third number. This corresponds to a destination range starting at the first number and containing the same number of values.
- Any source numbers not explicitly mapped correspond to the same destination number.
