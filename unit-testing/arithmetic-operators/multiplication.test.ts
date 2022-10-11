import { multiplyNumbers } from "../../operators/math"

//
test('multiply two positive integers', () => {
    expect(multiplyNumbers(12, 4)).toBe(48);
});

test('multiply a positive and negative integer', () => {
    expect(multiplyNumbers(12, -10)).toBe(-120);
});

test('multiply two negative integers', () => {
    expect(multiplyNumbers(-25, -6)).toBe(150);
});

test('multiply a positive integer and zero', () => {
    expect(multiplyNumbers(0, 7)).toBe(0);
});

test('multiply two decimals', () => {
    expect(multiplyNumbers(0.5, 0.2)).toBe(0.1);
});
