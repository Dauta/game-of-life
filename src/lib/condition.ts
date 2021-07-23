export const condition = (
  x: number,
  y: number,
  seed: { min: number; max: number }
) => {
  // seed minmax is randomized
  // x = y ⋃ (x2 + y2 > seed(min) ⋂ x2 + y2 < seed(max))
  const x2 = Math.pow(x, 2);
  const y2 = Math.pow(y, 2);
  return x === y || x2 === y2 || (x2 + y2 > seed.min && x2 + y2 < seed.max);
};
