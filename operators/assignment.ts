// Simple Assignment
export function simpleAssignmentCheck(valueA:number, valueB:number):number{
    let valueC = valueA + valueB
    return valueC
}

// Add and Assignment
export function addAssignmentCheck(valueA:number, valueB:number): number {
    valueA+=valueB
    return valueA
}

// Subtract and Assignment
export function subtractAssignmentCheck(valueA:number, valueB:number): number {
    valueA-=valueB
    return valueA
}

// Multiply and Assignment
export function multiplyAssignmentCheck(valueA:number, valueB:number): number {
    valueA*=valueB
    return valueA
}

// Divide and Assignment
export function divideAssignmentCheck(valueA:number, valueB:number): number {
    valueA/=valueB
    return valueA
}