// And logical operator
export function andOperatorChecker(condition1:boolean, condition2:boolean):boolean{
    const result = condition1 && condition2
    return result
}

// Or logical operator
export function orOperatorChecker(condition1:boolean, condition2:boolean):boolean{
    const result = condition1 || condition2
    return result
}

// not logical operator
export function notOperatorChecker(condition:boolean):boolean{
    const result = !(condition)
    return result
}