import { Cell } from "../Cell";

export const getNeighbours = (grid: Cell[][], cell: Cell) => {
  const { x, y } = cell.getPosition();

  const neighbouringIndeces: Cell["position"][] = [];
  const ranges = [-1, 0, 1];

  ranges.map((nx) => {
    ranges.map((ny) => {
      if (nx === 0 && ny === 0) return;

      const numCols = grid.length;
      const numRows = grid[0].length;
      // taking the modulo allows us to wrap around the grid
      const wrapAroundX = (x + nx + numCols) % numCols;
      const wrapAroundY = (y + ny + numRows) % numRows;
      neighbouringIndeces.push({
        x: wrapAroundX,
        y: wrapAroundY,
      });
    });
  });

  return neighbouringIndeces.map((neighbourPos) => {
    if (neighbourPos.x < 0 || neighbourPos.y < 0) return;
    return grid[neighbourPos.x][neighbourPos.y];
  });
};
