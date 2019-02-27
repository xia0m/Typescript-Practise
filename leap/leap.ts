function isLeapYear(year: number) {
    // Your code here
    if (year % 4 !== 0) {
        return false
    } else if (year % 100 !== 0) {
        return true
    } else if (year % 400 !== 0) {
        return false
    } else {
        return true
    }
}

export default isLeapYear