"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Squares {
    constructor(num) {
        this._num = num;
        this.squareOfSum = this.squareOfSumFn();
        this.sumOfSquares = this.sumOfSquaresFn();
        this.difference = this.differenceFn();
    }
    squareOfSumFn() {
        let sum = 0;
        for (let i = 1; i <= this._num; i++) {
            sum += i;
        }
        return Math.pow(sum, 2);
    }
    sumOfSquaresFn() {
        let sum = 0;
        for (let i = 1; i <= this._num; i++) {
            sum += Math.pow(i, 2);
        }
        return sum;
    }
    differenceFn() {
        return this.squareOfSum - this.sumOfSquares;
    }
}
exports.default = Squares;
//# sourceMappingURL=difference-of-squares.js.map