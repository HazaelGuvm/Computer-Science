let numbers = [1, 4, 7, 9, 3, 3, 5, 90];

let total = 0;

// for (let i = 0; i < numbers.length; i++){

// debugger;
//     if (i === 0){
//         total = total + numbers[0];
 
// }
    
//     if (i % 3 !== 0){
//         total = total + numbers[i];
// //console.log(numbers[i]);
//     }
// }

let i = 0
while (i < numbers.length){
    if (i === 0){
        total = total + numbers[0];
 
}
    
    if (i % 3 !== 0){
        total = total + numbers[i];
//console.log(numbers[i]);
    }
    i++
}
console.log('totallll:', total);