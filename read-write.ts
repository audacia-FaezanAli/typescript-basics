import * as fs from 'fs';
import { type } from 'os';
import { stringify } from 'querystring';

let data = fs.readFileSync('./appsettings.json', 'utf8')
console.log(typeof data)
let parsedData = JSON.parse(data)
console.log(typeof parsedData)

Object.keys(parsedData).forEach(function(key) {
    console.log(key+': ')
    parsedData[key].forEach((value:any) => {
        if(value !== undefined) {
            console.log(value)}
            })
        console.log('\n')
        })




// for (let [key, value] of data) {
//     console.log(value);
    
// }


// .array.forEach(element() => {
//     console.log(value)
// });





// // let testObject = user:{ ["Log in",
// //     "Create new user",
// //     "Update existing user",
// //     "Delete user",
// //     "Exit"
// // ]}

// let fileData = JSON.stringify(parsedData)
// console.log(fileData)
// console.log(typeof fileData)