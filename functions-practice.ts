function testFunction(
    dividend: number,
    divisor: number
): [quotient: number, remainder:number] {
    let quotient: number = dividend / divisor;
    let remainder: number = dividend % divisor;

    return [quotient, remainder];
}

// console.log(testFunction(20,3))


function sayHello(
    name: string,
    print: boolean = true
): string{
    var helloMessage: string = "Hello, my name is " + name
    if (print) {
        console.log(helloMessage)
    }
    return helloMessage
}

let test:number[] = []

function testing():void {
    let x: number = 0
    let y=1
    let z=2

    test.push(x)
    test.push(y)
    test.push(z)
}

testing()
console.log(test)