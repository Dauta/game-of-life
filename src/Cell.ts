import P5 from "p5";

export class Cell {
  private state: boolean;
  private numberLiveNeighbours: number;

  public constructor(
    private readonly position: { x: number; y: number },
    private readonly size: number
  ) {
    this.state = false;
    this.numberLiveNeighbours = 0;
  }

  public draw(ctx: P5) {
    const alpha = (255 / 3) * this.numberLiveNeighbours;
    const color =
      this.numberLiveNeighbours > 2 && this.state
        ? ctx.color("#99ffa9")
        : ctx.color("#48bb52");
    color.setAlpha(alpha);

    ctx.fill(color);
    ctx.noStroke();
    ctx.smooth();
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

  public setState(newState: boolean) {
    this.state = newState;
  }

  public getLiveNeighbours() {
    return this.numberLiveNeighbours;
  }

  public setLiveNeighbours(liveNeughbours: number) {
    this.numberLiveNeighbours = liveNeughbours;
  }
}
