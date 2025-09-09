//opgave 2.1

let arr =[1,2,4,6,8];

function max(arr) {
    let maxVal = arr[0];

    for (let value of arr) {
        if (value > maxVal) {
            maxVal = value;
        }
    }
    return maxVal
}
console.log(max(arr));




function contains(array,element) {
    for (let value of array) {
        if (value == element) {
            return true;
        }
    }
    return false
}


let targetFalse = 10;
let targetTrue = 6;

console.log('Do array contain target value', targetFalse ,'answer =',contains(arr,targetFalse)) // false 
console.log('Do array contain target value',targetTrue, 'answer = ', contains(arr,targetTrue)) // true


function sum(array) {
    let total = 0;
    for (let value of array) {
        total += value;

    }
    return total;
}
console.log(sum(arr), 'sum af array');
