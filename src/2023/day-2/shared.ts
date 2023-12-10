export type ColorData = {
  red: number;
  green: number;
  blue: number;
};

export type Game = {
  id: number;
  datalist: ColorData[];
};

export function parseGame(inputLine: string): Game {
  const [gameStr, dataStr] = inputLine.split(":");
  const id = Number(gameStr.replace(/\D/g, ""));
  const datalist = dataStr.split(";").map(data =>
    data.split(",").reduce(
      (acc, colorInputStr) => {
        const [countStr, colorStr] = colorInputStr.trim().split(" ");
        const count = Number(countStr);
        const color = colorStr as keyof ColorData;
        acc[color] = count;
        return acc;
      },
      { red: 0, green: 0, blue: 0 }
    )
  );
  return { id, datalist };
}
