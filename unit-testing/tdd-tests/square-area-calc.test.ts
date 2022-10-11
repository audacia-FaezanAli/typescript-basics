import { squareAreaCalc } from "../../tdd-functions/square-area-calc";

test('test a integer diagonal value', () => {
    expect(squareAreaCalc(12)).toBe(72);
});

test('test a decimal diagonal value', () => {
    expect(squareAreaCalc(8.6)).toBeCloseTo(36.98, 4)
});