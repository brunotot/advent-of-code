export type ConverterRange = {
  destinationStart: number;
  sourceStart: number;
  length: number;
};

export type ConverterRangeList = ConverterRange[];

export type ConverterRangeMapKey =
  | "seed-to-soil"
  | "soil-to-fertilizer"
  | "fertilizer-to-water"
  | "water-to-light"
  | "light-to-temperature"
  | "temperature-to-humidity"
  | "humidity-to-location";

export type InputData = {
  seeds: number[];
  seedToSoilMap: ConverterRangeList;
  soilToFertilizerMap: ConverterRangeList;
  fertilizerToWaterMap: ConverterRangeList;
  waterToLightMap: ConverterRangeList;
  lightToTemperatureMap: ConverterRangeList;
  temperatureToHumidityMap: ConverterRangeList;
  humidityToLocationMap: ConverterRangeList;
};

export function parseSeed(line: string): number[] {
  return line.split(":")[1].trim().split(" ").map(Number);
}

export function parseData(lines: string[]): InputData {
  return {
    seeds: parseSeed(lines[0]),
    seedToSoilMap: parseConverterRangeMap(lines, "seed-to-soil"),
    soilToFertilizerMap: parseConverterRangeMap(lines, "soil-to-fertilizer"),
    fertilizerToWaterMap: parseConverterRangeMap(lines, "fertilizer-to-water"),
    waterToLightMap: parseConverterRangeMap(lines, "water-to-light"),
    lightToTemperatureMap: parseConverterRangeMap(lines, "light-to-temperature"),
    temperatureToHumidityMap: parseConverterRangeMap(lines, "temperature-to-humidity"),
    humidityToLocationMap: parseConverterRangeMap(lines, "humidity-to-location"),
  };
}

export function parseConverterRange(line: string): ConverterRange {
  const [destinationStart, sourceStart, length] = line.split(" ").map(Number);
  return { destinationStart, sourceStart, length };
}

export function parseConverterRangeMap(
  lines: string[],
  key: ConverterRangeMapKey
): ConverterRangeList {
  const indexStart = lines.indexOf(`${key} map:`) + 1;
  const indexEnd = lines.indexOf("", indexStart);
  const slicedLines = lines.slice(indexStart, indexEnd);
  return slicedLines.map(parseConverterRange);
}

export function convertSeedToLocation(data: InputData, seed: number): number {
  const soil = createMapper(data.seedToSoilMap)(seed);
  const fertilizer = createMapper(data.soilToFertilizerMap)(soil);
  const water = createMapper(data.fertilizerToWaterMap)(fertilizer);
  const light = createMapper(data.waterToLightMap)(water);
  const temperature = createMapper(data.lightToTemperatureMap)(light);
  const humidity = createMapper(data.temperatureToHumidityMap)(temperature);
  const location = createMapper(data.humidityToLocationMap)(humidity);
  return location;
}

export function createMapper(rangeList: ConverterRangeList): (n: number) => number {
  return (n: number) => {
    const range = rangeList.find(r => n >= r.sourceStart && n < r.sourceStart + r.length);
    return range ? n - range.sourceStart + range.destinationStart : n;
  };
}
