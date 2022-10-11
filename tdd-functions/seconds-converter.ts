export function secondsConverter(seconds:number): string {
    let convertedTime = ''
    let remainder = seconds

    if(seconds/60 < 1){
        let secondsString = seconds+' seconds';
        return secondsString;
    } else if (seconds%60 != 0) {
        let secondsString = ' and '+seconds%60 + ' seconds';
        convertedTime = secondsString;
        remainder = Math.floor(seconds/60);
    }

    if(remainder/60 < 1){
        let minutes = remainder;
        let minutesString = minutes +' minutes';
        return minutesString + convertedTime;
    } else if(remainder%60 != 0) {
        let minutesString = ', '+ remainder%60 + ' minutes';
        convertedTime = minutesString + convertedTime;
        remainder = Math.floor(remainder/60);
    }

    if(remainder/24 < 1){
        let hours = remainder;
        let hoursString = hours +' hours';
        return hoursString + convertedTime;
    } else if(remainder%24 != 0) {
        let hoursString = ', '+ remainder%24 + ' hours';
        convertedTime = hoursString + convertedTime;
        remainder = Math.floor(remainder/24);
        if (remainder===1){
            return remainder + ' day' + convertedTime;
        }
        return remainder + ' days' + convertedTime;
    }
    return convertedTime
}
//     if(seconds/86400 >= 1) {
//         let days = Math.floor(seconds/86400)
//         remainder = seconds%86400
//         if(remainder === 0) {
//             return days + ' days'
//         }
//     } if (remainder/3600 >= 1) {
//         let hours = Math.floor(remainder/3600)
//         remainder = remainder%3600
//         if(remainder === 0) {
//             return hours+ ' hours'
//         }
//     } if (remainder/60 >= 1) {
//         let minutes = Math.floor(remainder/60)
//         remainder = remainder%60
//         if(remainder === 0) {
//             return minutes+ ' minutes'
//         }
//     }
//     return convertedTime
// }

console.log(secondsConverter(146598))