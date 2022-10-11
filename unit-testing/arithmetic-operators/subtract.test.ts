import { subtractNumbers } from "../../operators/math"

//
test('subtract two positive integers', () => {
    expect(subtractNumbers(9, 4)).toBe(5);
});

test('subtract a positive and negative integer', () => {
    expect(subtractNumbers(7, -10)).toBe(17);
});

test('subtract two negative integers', () => {
    expect(subtractNumbers(-25, -6)).toBe(-19);
});

test('subtract a positive integer and zero', () => {
    expect(subtractNumbers(0, 7)).toBe(-7);
});

test('subtract two decimals', () => {
    expect(subtractNumbers(0.5, 0.2)).toBe(0.3);
});
