import { divideNumbers } from "../../operators/math"

//
test('divide two positive integers', () => {
    expect(divideNumbers(12, 4)).toBe(3);
});

test('divide a positive and negative integer', () => {
    expect(divideNumbers(12, -10)).toBe(-1.2);
});

test('divide two negative integers', () => {
    expect(divideNumbers(-50, -5)).toBe(10);
});

test('divide a positive integer and zero', () => {
    expect(divideNumbers(0, 7)).toBe(0);
});

test('divide two decimals', () => {
    expect(divideNumbers(0.5, 0.2)).toBe(2.5);
});