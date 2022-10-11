import { addNumbers } from "../../operators/math"

//
test('add two positive integers', () => {
    expect(addNumbers(5, 2)).toBe(7);
});

test('add a positive and negative integer', () => {
    expect(addNumbers(7, -10)).toBe(-3);
});

test('add two negative integers', () => {
    expect(addNumbers(-25, -6)).toBe(-31);
});

test('add a positive integer and zero', () => {
    expect(addNumbers(5, 0)).toBe(5);
});

test('add two decimals', () => {
    expect(addNumbers(0.5, 0.2)).toBe(0.7);
});

