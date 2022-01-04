const fs = require("fs");

const fishes = fs
  .readFileSync("day6.txt", { encoding: "utf-8" })
  .replace(/[\r\n]/g, "")
  .split(",")
  .map(Number);

  //internalTimer
  //Cycle

  function part1() {
    const queue = new Array(9).fill(0);
    for (const fish of fishes) {
        queue[fish]++;
    }
    for (let i = 0; i < 80; i++) {
        const currentFishes = queue.shift();
        queue.push(currentFishes);
        queue[6] += currentFishes;
    }

    console.log(queue.reduce((a, b) => a + b, 0));
  }

  part1();

  function part2() {
    const queue = new Array(9).fill(0);
    for (const fish of fishes) {
        queue[fish]++;
    }
    console.log(queue);
    for (let i = 0; i < 256; i++) {
        const currentFishes = queue.shift();
        queue.push(currentFishes);
        queue[6] += currentFishes;
    }

    console.log(queue.reduce((a, b) => a + b, 0))
  }

  part2();