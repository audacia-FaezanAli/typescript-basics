import { simpleAssignmentCheck,addAssignmentCheck,subtractAssignmentCheck,multiplyAssignmentCheck,divideAssignmentCheck } from "./assignment";

const valueOne: number = 9
const valueTwo: number = -43
const valueThree: number = 56
const valueFour: number = 11
const valueFive: number = 144

// Simple Assignment
const simpleAssignmentTest = simpleAssignmentCheck(valueTwo, valueOne)
console.log(simpleAssignmentTest)

// Add and Assignment
const addAssignmentTest = addAssignmentCheck(valueThree, valueTwo)
console.log(addAssignmentTest)

// Subtract and Assignment
const subtractAssignmentTest = subtractAssignmentCheck(valueFive, valueTwo)
console.log(subtractAssignmentTest)

// Multiply and Assignment
const multiplyAssignmentTest = multiplyAssignmentCheck(valueFour, valueOne)
console.log(multiplyAssignmentTest)

// Divide and Assignment
const divideAssignmentTest = divideAssignmentCheck(valueFive, valueFour)
console.log(divideAssignmentTest)