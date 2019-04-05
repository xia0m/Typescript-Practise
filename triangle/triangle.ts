export default class Triangle {
  sides: number[]

  constructor(...sides: number[]) {
    this.sides = sides
  }

  checkInput(sides: number[]): boolean {
    if (sides[0] === 0 || sides[1] === 0 || sides[2] === 0) {
      return false
    }
    if (
      sides[0] + sides[1] <= sides[2] ||
      sides[1] + sides[2] <= sides[0] ||
      sides[0] + sides[2] <= sides[1]
    ) {
      return false
    }

    return true
  }

  kind(): string {
    if (!this.checkInput(this.sides)) {
      throw new Error()
    }
    if (this.sides[0] === this.sides[1] && this.sides[1] === this.sides[2]) {
      return "equilateral"
    } else if (
      this.sides[0] === this.sides[1] ||
      this.sides[1] === this.sides[2] ||
      this.sides[0] === this.sides[2]
    ) {
      return "isosceles"
    } else {
      return "scalene"
    }
  }
}
