var randomWords = require('random-words')

export function paragraphGeneratorFunction(numberOfWords : number): string{
    let paragraph = randomWords({exactly:numberOfWords, join: ' '})
    return paragraph
};