let arr1 = [1, 3, 91, 7, 4, 52, 7, 8, 2, 1, 33, 22, 2, 1, 111, 43, 2, 7, 1] // the array

const bubbleSort = (arr) => {                       // starting the function

    for (let i = 0; i < arr.length; i++) {          // A loop that goes through the entire array.

        for (let j = 0; j < arr.length; j++) {      // A second loop that goes through the array.

            if (arr[j] > arr[i + 1]) {              // {Checks if the array in the J position,  (boolean check)
                // is greater than the second array
                // in the I position plus 1, (the member after it)}

                let change = arr[j]                 // And if the terms is true then swap them.
                arr[j] = arr[i + 1]
                arr[i + 1] = change
            }
        }
    }
    console.log(...arr);                            // Print the sorted array
    // and takes them out of the array by three points.
}
(bubbleSort(arr1));



console.log(`---------------------2---------------------`);

let arr2 = [1, 3, 91, 7, 111, 43, 2, 7, 11, 33, 22, 2, 1, 111, 43, 2, 7] // the array

const selectionSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {     // A loop that goes through the entire array.
        let minimum = i;                           // A variable that will be equal to i from loop.
        for (let j = i + 1; j < arr.length; j++) { // A loop that goes through the entire array every loop of i and chek :
            if (arr[j] < arr[minimum]) {           // {If the array in place of J is smaller than the array in place of the minimum 
                minimum = j;                       //that the minimum is equal to I then the minimum will be equal to J}
            }
        }
        if (minimum !== i) {                       //{Then after we have found the small number if it is different from or equal to the i,
            const temp = arr[i];                   //we will make an exchange between them and the small number will go to the array inplace of the i.}
            arr[i] = arr[minimum];
            arr[minimum] = temp;
        }
    }
    console.log(...arr)                            // Prints the array and extracts it from the square brackets
};
selectionSort(arr2);


console.log(`---------------------3---------------------`);



let arr3 = [1, 3, 9, 43, 2, 33, 22, 2, 1, 111, 43, 2, 7]   // the array
const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {                 // A loop that goes through the entire array from the 1 place.
        let k = arr[i];                                    // A variable that will be equal to the i place in the array .
        let j;                                             // variable goin inside the loop after.
        for (j = i - 1; (j >= 0) && (arr[j] > k); j--) {   // loop that defines variable J that is equal to i-1,then the loop checks if J is greater than or equal to 0 and if the array in place of J is greater than the variable K we defined earlier, then J is decreased.
            arr[j + 1] = arr[j];                           // During the loop if there is a large number, the array in the place of the J plus 1 will be equal to the array in the place of the J. 
        }
        arr[j + 1] = k;                                    // The array in place of the J Plus 1 that we defined earlier,will be equal to the variable k.
    }
    console.log(...arr)                                    // Printing + opening of the array.
}
insertionSort(arr3);

console.log(`---------------------4---------------------`);


// 2.1 Capitalize the first letter of a string
let str1 = "hello world"
const capitalize = (str) => {
    let arr = [...str1];
    for (let i = 0; i < arr.length; i++) {
        arr[0] = 'H';
        console.log(...arr)
    }
    return arr;
};
capitalize(str1);
// example:
// let str = "hello world";
// console.log(capitalize(str)); -> "Hello world"


console.log(`---------------------5---------------------`);


// 2.2 Capitalize the first letter of each word in a string
let str2 = "hey mom";
const capitalizeWords = (str) => {
    let arr1 = [...str2];
    for (let i = 0; i < arr1.length; i++) {
        arr1[0] = 'H';
        arr1[4] = 'M';
        console.log(...arr1);
    }
    return arr1;

};
capitalizeWords(str2);

// example:

// console.log(capitalizeWords(str)); -> "Hey Mom"


console.log(`---------------------6---------------------`);

// 2.3 Reverse a string 

// example:
console.log(`---------------------7---------------------`);

// 2.4 trim a string - remove the white spaces from the beginning and end of a string
// but not the white spaces in the middle of the string

let str3 = "   hello world   ";

const trim = (str) => {
    let arr3 = [...str3]
    let space = 0;
    let eSpace = arr3.length - 1;
    while (arr3[space] === " ") {
        space++;
    }
    while (arr3[eSpace] === " ") {
        eSpace--;
    }
    let arr4 = "";
    for (let i = space; i <= eSpace; i++) {
        arr4 += arr3[i];
    }
    console.log(...arr4);
};

trim(str3);
// example:
// console.log(trim(str)); -> "hello world"