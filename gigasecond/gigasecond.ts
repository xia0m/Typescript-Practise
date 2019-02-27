const GIGASECOND = 1000000000

class Gigasecond {
  initialDate: Date

  constructor(theDate: Date) {
    this.initialDate = theDate
  }
  date(): Date {
    return new Date(this.initialDate.getTime() + GIGASECOND * 1000)
  }
}

export default Gigasecond
