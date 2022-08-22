function findValue (valueA:number, arrayOne:number[]):boolean {
    for (let index = 0; index < arrayOne.length; index++) {
        if (valueA === arrayOne[index]) {
            return true;
        }
    }
    return false
}

let testArray = [1, 2, 3, 5, 8, 13, 21, 34];

// console.log(findValue(2, testArray));
// console.log(findValue(5, testArray));
// console.log(findValue(6, testArray));
// console.log(findValue(99, testArray));

enum initialQuestions {
    "Create new user" = 100, 
    "Update existing user" = 200, 
    "Delete user" = 300,
    "Exit" = 400
}

// for (const Object.keys(initialQuestions) in initialQuestions) {
//     if (value > 0) {
//         console.log( value);
// }
//     }

// console.log(Object.values(initialQuestions))

console.log(Object.values(initialQuestions))

for (var enumMember in initialQuestions) {
    var isValueProperty = Number(enumMember) >= 0
    if (isValueProperty) {
        console.log(initialQuestions[enumMember]);
    }
}