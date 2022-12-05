// we are not allowed to use the built-in sort method, sum, max, min, average, median, mode, range, variance methods
console.log(" - 1 - ")//1// 

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]
let mySum = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count += arr[i];
    }
    return count;
};
console.log(mySum(arr));
// example mySum function:
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];




console.log(" - 2 - ")// pra 2 //

let myMax = (arr) => {

    max = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] >= arr[max])
            max = i;

    }
    return (arr[max]);


}

console.log(myMax(arr));// -> 10
// example myMax function:
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



console.log(" - 3 - ");//3//

let myMin = (arr) => {
    min = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] <= arr[min])
            min = i;
    }
    return (arr[min]);
};
// example myMin function:
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(myMin(arr));// -> 1


console.log(" - 4 - ");//4//

let myAverage = (arr) => {
    let count = 0;
    let avrag = 0;
    for (let i = 0; i < arr.length; i++) {
        count += arr[i];
        avrag = (count / arr.length)

    }
    return avrag;
};
// example myAverage function:
console.log(myAverage(arr)); //-> 5.5
let arr2 = [1, 2, 2, 3, 6, 9, 4, 7, 7, 9]
console.log(myAverage(arr2)); // -> 4.25



console.log(" - 5 - ");//5//

let myMedian = (arr) => {
    let midd = 0;
    for (let i = 0; i < arr.length; i++) {
        midd = (arr.length / 2);

    }
    return midd;
};
// median is the middle value of an array
// example myMedian function:
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(myMedian(arr));// -> 5.5
// let arr2 = [ 1,2,2,3,4,7,7,9]
console.log(myMedian(arr2));// -> 3.5



console.log(" - 6 - ");//6//


let arr3 = [1, 2, 2, 3, 4, 7, 7, 6, 6, 6, 6, 6, 6, 7, 7, 10, 1, 1, 1, 1, 8]

let myMode = (arr) => {
    let mode = 0;
    let maxCount = 0;
    for (let i = 0; i < arr.length; i++) {
        let counter = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                counter++;

            }
            if (counter > maxCount) {
                maxCount = counter;
                mode = arr[i]
            }
        }

    }
    return mode;
};
console.log(myMode(arr3));
// mode is the most common value of an array



console.log(" - 7 - ");//7//


let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 5, 98];

let myRange = (arr4) => {
    max = 0;
    for (i = 0; i < arr4.length; i++) {
        if (arr4[i] >= arr4[max])
            max = i;
    }

    min = 0;
    for (i = 0; i < arr4.length; i++) {
        if (arr4[i] <= arr4[min])
            min = i;
    }
    return (arr4[max] - arr4[min]);
}
console.log(myRange(arr4));
// range is the difference between the largest and smallest values of an array



console.log(" - 8 - ");//8//

let arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let myVariance = (arr) => {
    let variance = 0;
    let average = myAverage(arr);
    for (let i = 0; i < arr.length; i++) {
        variance += (arr[i] - average) ** 2;
    }
    variance = variance / arr.length;
    return variance;
}; // variance is the average of the squared differences from the Mean
console.log(myVariance(arr7))



console.log(" - 9 - ");//9//

let arr5 = [3, 5, 6, 8, 2, 4, 5, 1, 4, 44, 87, 9, 12, 33, 1, 2]
let mySort = (arr) => { // sort an array from smallest to largest
    let sortedArr = [];
    let min = myMin(arr);
    let max = myMax(arr);
    for (let i = min; i <= max; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] == i) {
                sortedArr.push(arr[j]);
            }
        }
    }
    return sortedArr;
};// sort an array from smallest to largest 
console.log(mySort(arr5))