export const condition = (
  x: number,
  y: number,
  seed: { min: number; max: number }
) => {
  return x * x + y * y > seed.min && x * x + y * y < seed.max ? 1 : 0;
};
