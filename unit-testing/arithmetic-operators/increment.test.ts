import { numberIncrement } from "../../operators/math"

//
test('increment a positive integers', () => {
    expect(numberIncrement(6)).toBe(7);
});

test('increment a negative integer', () => {
    expect(numberIncrement(-4)).toBe(-3);
});

test('increment a decimal', () => {
    expect(numberIncrement(0.52)).toBe(1.52);
});