import P5 from "p5";
import { Cell } from "../Cell";
import { getNeighbours } from "./geNeighbours";

export const tick = (grid: Cell[][], ctx: P5) => {
  grid.forEach((row) => {
    row.forEach((cell) => {
      const numberlivingNeighbours = getNeighbours(grid, cell).filter((cell) =>
        cell?.getState()
      ).length;

      cell.setLiveNeighbours(numberlivingNeighbours);
    });
  });

  grid.forEach((row) => {
    row.forEach((cell) => {
      const isAlive = cell.getState();
      const numberLiveNeighbours = cell.getLiveNeighbours();
      // Any dead cell with three live neighbours becomes a live cell.
      if (!isAlive && numberLiveNeighbours === 3) {
        cell.setState(true);
      }
      // Any live cell with two or three live neighbours survives
      else if (
        isAlive &&
        !(numberLiveNeighbours === 2 || numberLiveNeighbours === 3)
      ) {
        cell.setState(false);
      }
      // draw only live cells
      if (cell.getState()) {
        cell.draw(ctx);
      }
    });
  });
};
