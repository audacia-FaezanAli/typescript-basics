import { numberDecrement } from "../../operators/math"

//
test('decrement a positive integers', () => {
    expect(numberDecrement(32)).toBe(31);
});

test('decrement a negative integer', () => {
    expect(numberDecrement(-8)).toBe(-9);
});

test('decrement a decimal', () => {
    expect(numberDecrement(74.62)).toBe(73.62);
});