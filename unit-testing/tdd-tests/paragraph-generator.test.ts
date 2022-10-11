import { paragraphGeneratorFunction } from "../../tdd-functions/paragraph-generator";

test('count number of words in paragraph is equal to expected number.', () => {
    let paragraph = paragraphGeneratorFunction(24)
    let wordCount = paragraph.split(' ').length
    expect (wordCount).toBe(24)
});

test('check when number of words is 0', () => {
    let paragraph = paragraphGeneratorFunction(0)
    let wordsArray = paragraph.split(' ').filter(word => word)
    let wordCount = wordsArray.length
    expect (wordCount).toBe(0);
});