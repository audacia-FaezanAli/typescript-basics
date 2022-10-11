import { perfectSquare } from "../../operators/math"

test('check perfect square positive integer', () => {
    expect(perfectSquare(36)).toStrictEqual(true);
});

test('check non-perfect square positive integer', () => {
    expect(perfectSquare(47)).toStrictEqual(false);
});

// test('check perfect square negative integer', () => {
//     expect(perfectSquare(-144)).toStrictEqual(false);
// });

test('check zero', () => {
    expect(perfectSquare(0)).toStrictEqual(true);
});
