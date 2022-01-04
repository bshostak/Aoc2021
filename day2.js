const fs = require("fs");

const lines = fs
  .readFileSync("day2.txt", { encoding: "utf-8" })
  .split("\n")
  .map((x) => {
      const [direction, n] = x.split(" ");
      return {
          direction,
          n: parseInt(n)
      }
  });

  let submarine = {
      depth: 0,
      position: 0,
  };

  for (const line of lines) {
      switch(line.direction) {
          case "forward":
              submarine.position += line.n;
          break;
          case "up":
              submarine.depth -= line.n;
          break;
          case "down":
              submarine.depth += line.n;
          break;
      }
  }

  console.log(submarine.depth * submarine.position);

  submarine = {
    depth: 0,
    position: 0,
    aim: 0
};

for (const line of lines) {
    switch(line.direction) {
        case "forward":
            submarine.position += line.n;
            submarine.depth += submarine.aim * line.n;
        break;
        case "up":
            submarine.aim -= line.n;
        break;
        case "down":
            submarine.aim += line.n;
        break;
    }
}

console.log(submarine.depth * submarine.position);