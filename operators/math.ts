export function addNumbers(x:number, y:number): number {
    let sum = x + y
    return sum
}

export function subtractNumbers(x:number, y:number): number {
    let subtraction = x - y
    return subtraction
}

export function multiplyNumbers(x:number, y:number): number {
    let multiplication = x * y
    return multiplication
}

export function exponentNumber(x:number, power:number): number {
    let exponential = x**power
    return exponential
}

export function divideNumbers(dividend:number, divisor:number): number{
    let division = dividend/divisor
    return division
}

export function numberRemainder(dividend:number, divisor:number): number{
    let remainder = dividend%divisor
    return remainder
}

export function numberIncrement(x:number, times:number): [number, number]{
    while (times>0) {
    x++
    times--
    }
    return [x, times]
}

export function mod(
    dividend: number,
    divisor: number
): [quotient: number, remainder:number] {
    let quotient: number = dividend / divisor;
    let remainder: number = dividend % divisor;

    return [quotient, remainder];
}

export function fibonacciCalc(count:number, num1:number=0, num2:number=1, fibNums:number[]=[]): number[] {
    fibNums.push(num1)
    count--
    let num3 = num1 + num2
    if (count>0) {
    fibonacciCalc(count, num2, num3, fibNums)    
    }
    return fibNums
}

export function perfectSquare(numA:number) {
    let x = numA**0.5
    console.log("The square root is:" + x)
    if (x % 1 == 0) {
        console.log(numA + " is a perfect square!")
        return true
    } else {
        console.log(numA + " is not a perfect square!")
        return false
    }
}
// perfectSquare(144)

export function turnNegative(inputNumber:number):number {
    return -inputNumber
}

