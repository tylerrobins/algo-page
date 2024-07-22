class Dispatch {
  private currentArr: number[];
  private colors: { [key: string]: number[] };

  constructor(
    arr: number[],
    grey: number[] = [],
    red: number[] = [],
    green: number[] = [],
    orange: number[] = []
  ) {
    this.currentArr = arr;
    this.colors = {
      grey: grey,
      red: red,
      green: green,
      orange: orange,
    };
  }

  getCurrentArr(): number[] {
    return this.currentArr;
  }

  getColor(color: string): number[] {
    return this.colors[color];
  }

  setArray(arr: number[]): void {
    this.currentArr = arr;
  }

  setColorArray(
    color: "grey" | "red" | "green" | "orange",
    indexes: number[]
  ): void {
    if (Object.prototype.hasOwnProperty.call(this.colors, color)) {
      this.colors[color] = indexes;
    }
  }
}

export default Dispatch;
