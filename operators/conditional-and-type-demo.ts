var numVarOne:number = 61
var numVarTwo:number = -27
var numVarThree:number = 742

var stringVarOne:string = "Hello World"
var stringVarTwo:string = "test string"
var stringVarThree:string = "conditional and type demo"

var anyVar:any = " hello"

// number variable ternary
let ternarySolution:number = numVarTwo >= numVarOne ? numVarTwo+numVarOne : numVarTwo-numVarOne
console.log(ternarySolution)
// console.log(ternarySolution instanceof Number)

// random variable ternary
let ternarySolutionTwo = typeof numVarThree && typeof numVarOne === "number"
    ? numVarThree*numVarOne
    : "Not all test subjects are numbers."
console.log(ternarySolutionTwo)

// instance of
// Doesn't work for built in classes
console.log(anyVar instanceof String)

// multiple condition ternary
let conditionOne = numVarTwo >= numVarOne
let conditionTwo = typeof numVarThree === "number" && typeof stringVarOne === "number"
let conditionThree = typeof (stringVarTwo + numVarThree) === "string"

let multipleTernarySolution:string = conditionOne && (conditionTwo || conditionThree)
    ? "Condition One is True, and at least one of Condition Two or Condition Three is True"
    : conditionOne
        ? "Only Condition One is True"
        :conditionTwo
            ? "Condition Two is True"
            : conditionThree
                ? "Only condition Three is True"
                : "All conditions are False"


console.log(multipleTernarySolution)


