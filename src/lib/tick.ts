import P5 from "p5";
import { Cell } from "../Cell";
import { getNeighbours } from "./geNeighbours";

export const tick = (grid: Cell[][], ctx: P5) => {
  grid.forEach((row) => {
    row.forEach((cell) => {
      const numberlivingNeighbours = getNeighbours(grid, cell).filter(
        (cell) => cell?.getState() === 1
      ).length;

      cell.setLiveNeighbours(numberlivingNeighbours);
    });
  });

  grid.forEach((row) => {
    row.forEach((cell) => {
      const state = cell.getState();
      const numberLiveNeighbours = cell.getLiveNeighbours();
      // Any dead cell with three live neighbours becomes a live cell.
      if (state === 0 && numberLiveNeighbours === 3) {
        cell.setState(1);
      }
      // Any live cell with two or three live neighbours survives
      else if (
        state === 1 &&
        !(numberLiveNeighbours === 2 || numberLiveNeighbours === 3)
      ) {
        cell.setState(0);
      }

      if (cell.getState() === 1) {
        cell.draw(ctx);
      }
    });
  });
};
