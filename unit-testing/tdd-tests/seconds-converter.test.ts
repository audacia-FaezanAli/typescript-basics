import { secondsConverter } from "../../tdd-functions/seconds-converter";

test('test for number of seconds below 1 minute', () => {
    var convertedTime = secondsConverter(34);
    expect(convertedTime).toBe("34 seconds")
});

test('test for number of seconds for multiple minutes', () => {
    var convertedTime = secondsConverter(256);
    expect(convertedTime).toBe("4 minutes and 16 seconds")
});

test('test for number of seconds for above an hour', () => {
    var convertedTime = secondsConverter(20473);
    expect(convertedTime).toBe("5 hours, 41 minutes and 13 seconds")
});

test('test for number of seconds for above a day', () => {
    var convertedTime = secondsConverter(93784);
    expect(convertedTime).toBe("1 day, 2 hours, 3 minutes and 4 seconds")
});

test('test for negative seconds', () => {
    var convertedTime = secondsConverter(-18);
    expect(convertedTime).toBe("-18 seconds")
});