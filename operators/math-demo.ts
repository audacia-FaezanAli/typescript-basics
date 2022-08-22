import { multiplyNumbers, addNumbers, subtractNumbers, divideNumbers, exponentNumber, numberIncrement, numberRemainder, mod, fibonacciCalc, perfectSquare} from "./math"

const numA: number = 42
const numB: number = 6
const numC: number = 23
const numD: number = 1553
const numE: number = 279

let multipleAC = multiplyNumbers(numA, numC)
console.log(multipleAC)
let additionDE = addNumbers(numD, numE)
console.log(additionDE)
let subtractBC = subtractNumbers(numB, numC)
console.log(subtractBC)
let divideEB = divideNumbers(numE, numB)
console.log(divideEB)
let exponentCB = exponentNumber(numC, numB)
console.log(exponentCB)
let incrementAB = numberIncrement(numA, numB)
console.log(incrementAB)
let remainderEB = numberRemainder(numE, numB)
console.log(remainderEB)

console.log(fibonacciCalc(20))

perfectSquare(256)

// let firstArray: number[] = [2,6,8,24,64,97]
// let secondArray: number[] = [6,92,-9,-32,44,34,123,432,550]
