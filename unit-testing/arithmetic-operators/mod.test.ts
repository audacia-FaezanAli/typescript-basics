import { mod } from "../../operators/math"

test('divide two positive integers', () => {
    expect(mod(12, 5)).toEqual([2.4, 2]);
});

test('divide a positive with a negative integer', () => {
    expect(mod(12, -10)).toEqual([-1.2, 2]);
});

test('divide a negative with a positive integer', () => {
    expect(mod(-12, 10)).toEqual([-1.2, -2]);
});

test('divide two negative integers', () => {
    expect(mod(-50, -4)).toEqual([12.5, -2]);
});

test('divide a positive integer and zero', () => {
    expect(mod(0, 7)).toEqual([0, 0]);
});

test('divide two decimals', () => {
    var x = mod(0.7, 0.2);
    expect(x[0]).toBeCloseTo(3.5);
    expect(x[1]).toBeCloseTo(0.1);
});