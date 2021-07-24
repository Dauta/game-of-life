import P5 from "p5";
import { Cell } from "./Cell";
import { populateGrid } from "./lib/populateGrid";
import { tick } from "./lib/tick";

const FRAME_RATE = 60;
const CELL_SIZE = 3;
const BACKGROUND_COLOR = "#443232";

let grid: Cell[][] = [];
let isLive = true;
let generation = 0;

const seed = {
  min: Math.floor(20000 * Math.random() + 20000),
  max: Math.floor(100000 * Math.random() + 50000),
};

const sketch = (ctx: P5) => {
  ctx.setup = () => {
    ctx.frameRate(FRAME_RATE);
    const { windowWidth, windowHeight } = ctx;
    ctx.createCanvas(windowWidth, windowHeight);
    ctx.background(BACKGROUND_COLOR);
    grid = populateGrid(windowWidth, windowHeight, CELL_SIZE, seed);
  };

  ctx.draw = () => {
    if (!isLive) return;

    ctx.background(BACKGROUND_COLOR);

    tick(grid, ctx);
    generation++;

    // update label
    const labelText = `Generaiton: ${generation} (click anywhere to pause)`;
    ctx.fill(0, 100);
    ctx.rect(0, 0, labelText.length * 7.6, 42);
    ctx.fill(255);
    ctx.textSize(16);
    ctx.text(labelText, 8, 16);
    ctx.text(`Seed: min ${seed.min}, max ${seed.max}`, 8, 36);
  };

  ctx.windowResized = () => {
    ctx.resizeCanvas(ctx.windowWidth, ctx.windowHeight);
  };

  ctx.mouseClicked = () => {
    isLive = !isLive;
  };
};

export default sketch;
