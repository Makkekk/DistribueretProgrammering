// bubbleSort.js
// opgave 2.1
let list = [4, 6, 5, 2, 10, 6, 9, 8, 11, 32, 25, 100];

function bubbleSort(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (array[j] > array[j + 1]) {

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

console.log('Sorteret liste', bubbleSort(list))

function binarySearch(list, target) {


    let low = 0;
    let high = list.length - 1;

    while (low <= high && position === -1) {
        let mid = parseInt((low + high) / 2);

        if (list[mid] === target) {
            return mid;
        } else if (list[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;
}


let target = 8;
let position = -1

let result = binarySearch(list, target);

console.log('target;', target, 'index:', result)
