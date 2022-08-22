import {greaterThanCheck, lessThanCheck,greaterThanOrEqualCheck,lessThanOrEqualCheck,equalityCheck,notEqualCheck, betweenTwoNumbers, positiveOrNegativeCheck} from "./relational";

const valOne:number = 34
const valTwo:number = 67
const valThree:number = -9
const valFour:number = 3.5
const valFive:number = 0

// Greater than 
const greaterThanTest = greaterThanCheck(valTwo, valOne)
console.log(greaterThanTest)

// Less than
const lessThanTest = lessThanCheck(valFour, valThree)
console.log(lessThanTest)

//Greater than or equal to
const greaterThanOrEqualTest = greaterThanOrEqualCheck(valFive,valThree)
console.log(greaterThanOrEqualTest)

// Less than or equal to
const lessThanOrEqualTest = lessThanOrEqualCheck(valThree, valOne)
console.log(lessThanOrEqualTest)

// Equality
const equalityTest = equalityCheck(valThree, valThree)
console.log(equalityTest)

// not equal
const notEqualTest = notEqualCheck(valFive,valFour)
console.log(notEqualTest)

// Between two numbers
const betweenTwoNumbersTest = betweenTwoNumbers(valFour, valThree, valFive)
console.log(betweenTwoNumbersTest)

// Positive or negative check
const positiveOrNegativeTest = positiveOrNegativeCheck(valFour)
console.log(positiveOrNegativeTest)