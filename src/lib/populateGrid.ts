import { Cell } from "../Cell";
import { condition } from "./condition";

export const populateGrid = (
  cols: number,
  rows: number,
  cellSize: number,
  seed: {
    min: number,
    max: number,
  }
): Cell[][] => {
  const columnList = new Array(Math.round(cols / cellSize)).fill(1);
  const rowList = new Array(Math.round(rows / cellSize)).fill(1);

  const grid: Cell[][] = [];
  columnList.map((_, col) => {
    const column: Cell[] = [];
    rowList.map((_, row) => {
      const cell = new Cell({ x: col, y: row }, cellSize);
      column.push(cell);

      const state = condition(col, row, seed);
      cell.setState(state);
    });

    grid.push(column);
  });

  return grid;
};
