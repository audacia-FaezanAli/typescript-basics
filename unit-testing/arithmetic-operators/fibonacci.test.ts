import { fibonacciCalc } from "../../operators/math"

test('default start numbers 5 digits of sequence', () => {
    expect(fibonacciCalc(5)).toEqual([0, 1, 1, 2, 3]);
});

test('default start numbers 10 digits of sequence', () => {
    expect(fibonacciCalc(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
});

test('start numbers 3 & 5  10 digits of sequence', () => {
    expect(fibonacciCalc(10, 3, 5)).toEqual([3, 5, 8, 13, 21, 34, 55, 89, 144, 233]);
});