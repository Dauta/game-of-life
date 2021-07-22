import P5 from "p5";

export class Cell {
  private state: 0 | 1;
  private numberLiveNeighbours: number;

  public constructor(
    private readonly position: { x: number; y: number },
    private readonly size: number
  ) {
    this.state = 0;
    this.numberLiveNeighbours = 0;
  }

  public draw(ctx: P5) {
    const alpha = (255 / 3) * this.numberLiveNeighbours;
    const color =
      this.numberLiveNeighbours > 2 && this.state === 1
        ? ctx.color("#fff")
        : ctx.color("#eeb63d");

    color.setAlpha(alpha);
    ctx.fill(color);
    ctx.noStroke();
    ctx.square(
      this.position.x * this.size,
      this.position.y * this.size,
      this.size
    );
  }

  public getPosition() {
    return this.position;
  }

  public getState() {
    return this.state;
  }

  public setState(newState: 0 | 1) {
    this.state = newState;
  }

  public getLiveNeighbours() {
    return this.numberLiveNeighbours;
  }

  public setLiveNeighbours(liveNeughbours: number) {
    this.numberLiveNeighbours = liveNeughbours;
  }
}
