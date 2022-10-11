import { exponentNumber } from "../../operators/math"

//
test('positive base to the power of positive exponent', () => {
    expect(exponentNumber(12, 2)).toBe(144);
});

test('positive base to the power of negative exponent', () => {
    expect(exponentNumber(12, -2)).toBeCloseTo(0.00694, 4);
});

test('negative base to the power of positive exponent', () => {
    expect(exponentNumber(-2, 3)).toBe(-8);
});

test('negative base to the power of negative exponent', () => {
    expect(exponentNumber(-10, -3)).toBe(-0.001);
});

test('zero base to the power of integer exponent', () => {
    expect(exponentNumber(0, 7)).toBe(0);
});

test('positive integer base to the power of decimal exponent', () => {
    expect(exponentNumber(25, 0.5)).toBe(5);
});