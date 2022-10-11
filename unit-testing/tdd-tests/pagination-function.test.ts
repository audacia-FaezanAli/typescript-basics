import { paginationFunction } from "../../tdd-functions/pagination-function";

test('test array of strings where all items fit on a single page, and view the first page', () => {
    var result = paginationFunction(["Hello World", "Bye World"], 5, 0)
    expect(result[0]).toBe("Hello World")
    expect(result[1]).toBe("Bye World")
});

test('test array of strings where multiple pages and viewing the second page', () => {
    var result = paginationFunction(["a", "b", "c", "d", "e", "f", "g"], 3, 1)
    expect(result[0]).toBe("d")
    expect(result[1]).toBe("e")
    expect(result[2]).toBe("f")
});

test('test array of strings where multiple pages and viewing the third page which is not full', () => {
    var result = paginationFunction(["a", "b", "c", "d", "e", "f", "g"], 3, 2)
    expect(result[0]).toBe("g")
    expect(result[1]).toBeUndefined
});

test('test empty array', () => {
    var result = paginationFunction([], 10, 99)
    expect(result[0]).toBeUndefined
    expect(result[5]).toBeUndefined
});