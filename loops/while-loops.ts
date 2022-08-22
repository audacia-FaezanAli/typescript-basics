function howManyTimesDividedByTwo(inputNumber:number): number {
    let count = 0;
    while (inputNumber>=2) {
        count+=1;
        inputNumber-=2;
    }
    return count;
}

console.log(howManyTimesDividedByTwo(1));
console.log(howManyTimesDividedByTwo(2));
console.log(howManyTimesDividedByTwo(33));
console.log(howManyTimesDividedByTwo(5679));