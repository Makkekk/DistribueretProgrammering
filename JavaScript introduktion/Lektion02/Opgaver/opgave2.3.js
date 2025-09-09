
function compare(s1, s2) {
    if (s1 < s2) {
        return -1;
    }
    if (s1 === s2) {
        return 0;
    } else {
        return 1
    }
}

let string = 'Karsten';
let string1 = 'Jannik';
let string3 = 'Martin';
let string4 = 'ddddddddddddddddddddddddd'

console.log(compare(string, string1));
console.log(compare(string3, string4));

function compareLen(s1, s2) {
    if (s1.length < s2.length) {
        return -1;
    }
    else if (s1.length === s2.length) {
        return 0;
    } else {
        return 1;

    }
}

let stringNoob = 'noob';          // length 4
let stringStorNoob = 'kæmpe noob';   // length 11


console.log('CompareLenght',compareLen(stringNoob,stringStorNoob));


function compareIgnoreCase(s1, s2) {
    const lower1 = s1.toLowerCase();
    const lower2 = s2.toLowerCase();
    
    if (lower1 < lower2) {
        return -1;
    }

    if (lower1 === lower2) {
        return 0;
    } else {
        return 1
    }
    
}
console.log(compareIgnoreCase("Apple", "banana"));  // -1
console.log(compareIgnoreCase("apple", "APPLE"));   // 0
console.log(compareIgnoreCase("Zoo", "apple"));     // 1



//bubble sort med compare

function bubbleSort(array, compare) {
    for (let i = array.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (compare(array[j],array[j+1]) > 0) {

                swap(j, j + 1);
            }
        }
    }
    return array;

    function swap(i, j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }
}

let words = ["banana", "Apple", "noob", "Kæmpe"];
console.log(bubbleSort(words, compare));