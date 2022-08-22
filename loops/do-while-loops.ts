function startCallingBingoNumbers(): number {
    let iterations = 0
    let bingoArray: number[] = []
    do {let randomNumber = Math.floor(((Math.random()*99)+1))
        if (!bingoArray.includes(randomNumber)) {
            iterations++
            bingoArray.push(randomNumber)            
            // console.log(randomNumber)
            // console.log(iterations)
        } 
        else {
            iterations++
            // console.log(iterations)
        }
    } while (bingoArray.length < 99);
    console.log(bingoArray)
    return iterations
}

console.log(startCallingBingoNumbers())