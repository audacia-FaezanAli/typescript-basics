// Greater than
export function greaterThanCheck(num1:number, num2:number): string{
    let greaterThan = num1>num2
    return num1+" > "+num2+" is "+ greaterThan
}

// Less than
export function lessThanCheck(num1:number, num2:number): string{
    let lessThan = num1<num2
    return num1+" < "+num2+" is "+ lessThan
}

// Greater than or equal to
export function greaterThanOrEqualCheck(num1:number, num2:number): string{
    let greaterThanOrEqual = num1>=num2
    return num1+" >= "+num2+" is "+ greaterThanOrEqual
}

// Less than or equal to
export function lessThanOrEqualCheck(num1:number, num2:number): string{
    let lessThanOrEqual = num1<=num2
    return num1+" <= "+num2+" is "+ lessThanOrEqual
}

// Equality
export function equalityCheck(num1:number, num2:number): string{
    let equalTo = num1===num2
    return num1+" = "+num2+" is "+ equalTo
}

// Not equal
export function notEqualCheck(num1:number, num2:number): string{
    let notEqualTo = num1!==num2
    return num1+" != "+num2+" is "+ notEqualTo
}

export function betweenTwoNumbers(valueOne:number, limitA:number, limitB:number): string{
    if(ltAndgt(valueOne, limitA, limitB)) {
        return valueOne + " is between " + limitA + " and " + limitB
    }
    else if(ltoeAndGt(valueOne, limitA, limitB)) {
        return valueOne + " is greater to or equal to " + limitA + " and less than " + limitB
    }
    else if(ltAndGtor(valueOne, limitA, limitB)) {
        return valueOne + " is greater than " + limitA + " and less than or equal to " + limitB
    }
    else if(ltorAndGtor(valueOne, limitA, limitB)){
        return valueOne + " is greater than or equal to " + limitA + " and less than or equal to " + limitB
    }
    return valueOne + " is not between " + limitA + " and " + limitB
}

// GT, LT, GTOE, LTOE
export function ltAndgt(valueOne:number, lowerLimit:number, higherLimit:number): boolean {
    return lowerLimit < valueOne && valueOne < higherLimit;
}

export function ltoeAndGt(valueOne:number, lowerLimit:number, higherLimit:number): boolean {
    return lowerLimit <= valueOne && valueOne < higherLimit;
}

export function ltAndGtor(valueOne:number, lowerLimit:number, higherLimit:number): boolean {
    return lowerLimit < valueOne && valueOne <= higherLimit;
}

export function ltorAndGtor(valueOne:number, lowerLimit:number, higherLimit:number): boolean {
    return lowerLimit <= valueOne && valueOne <= higherLimit;
}

export function positiveOrNegativeCheck(checkNumber:number): string{
    let result = checkNumber >0 ? checkNumber+" is positive" 
                                : checkNumber < 0 
                                    ? checkNumber +" is negative" :checkNumber + " is zero"
    return result
}
