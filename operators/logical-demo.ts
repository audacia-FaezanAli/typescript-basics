import {andOperatorChecker, orOperatorChecker, notOperatorChecker } from "./logical";
import { ltAndGtor,ltAndgt,ltoeAndGt,ltorAndGtor } from "./relational";

const valOne:number = 32
const valTwo:number = -324
const valThree:number = 7889
const valFour:number = 4.6
const valFive:number = -0.9

let conditionalOne = valThree < valFive
let conditionalTwo = valFour === valFour
let conditionalThree = valOne > valTwo

const andOperatorTest = andOperatorChecker(conditionalTwo, conditionalOne)
console.log(andOperatorTest)

const orOperatorTest = orOperatorChecker(conditionalOne, conditionalThree)
console.log(orOperatorTest)

const notOperatorTest = notOperatorChecker(conditionalTwo)
console.log(notOperatorTest)

const andOperatorTestTwo = andOperatorChecker(ltAndGtor(54,63,99), ltAndgt(5,0,10))
console.log(andOperatorTestTwo)

const orOperatorTestTwo = orOperatorChecker(ltoeAndGt(67,43,99), ltorAndGtor(6,-54,3))
console.log(orOperatorTestTwo)

var test:boolean = true && (true || false) && false