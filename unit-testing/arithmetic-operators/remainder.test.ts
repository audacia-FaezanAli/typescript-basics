import { numberRemainder } from "../../operators/math"

//
test('divide two positive integers', () => {
    expect(numberRemainder(12, 5)).toBe(2);
});

test('divide a positive with a negative integer', () => {
    expect(numberRemainder(12, -10)).toBe(2);
});

test('divide a negative with a positive integer', () => {
    expect(numberRemainder(-12, 10)).toBe(-2);
});

test('divide two negative integers', () => {
    expect(numberRemainder(-50, -4)).toBe(-2);
});

test('divide a positive integer and zero', () => {
    expect(numberRemainder(0, 7)).toBe(0);
});

test('divide two decimals', () => {
    expect(numberRemainder(0.7, 0.2)).toBeCloseTo(0.1);
});