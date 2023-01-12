//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//    Home Assignment 1 - sorting algorithms 1 & string manipulation 1
// ----------------------------------------------------------------------
//              grading system: (for each question)
//       
// 1. if the code is not working - *0
// 2. if the code is working but not according to the instructions - *0.5
// 3. if there's no explanation -  *0.75
// 4. late submission - final_grade -=  10*days_late
//
// ----------------------------------------------------------------------
//  --------------- DUE DATE: 05/12/2022 at 11:59pm ---------------------
// ______________________________________________________________________


// ______________________________________________________________________
//
// ------------------------  PART 1 - 60 Points -------------------------
//_______________________________________________________________________


// 1. sorting algorithms - bubble sort, selection sort, insertion sort
// part 1 - 60 points 20 points each

/*
* write the fulling functions below - you can't any built-in methods
* click the link to see the algorithm
* try implementing the algorithm in your own words
*/

// helpfull links:
// link to visualize the sorting : https://visualgo.net/en/sorting
// https://algorithm-visualizer.org/brute-force/bubble-sort (bubble sort)
// https://algorithm-visualizer.org/brute-force/selection-sort (selection sort)
// https://algorithm-visualizer.org/brute-force/insertion-sort (insertion sort)


// 1.1 bubble sort - https://en.wikipedia.org/wiki/Bubble_sort
console.log(`---------------------1---------------------`);

let arr1 = [1, 3, 91, 7, 4, 52, 7, 8, 2, 1, 33, 22, 2, 1, 111, 43, 2, 7, 1] // the array

const bubbleSort = (arr) => {                       // starting the function
    for (let i = 0; i < arr.length; i++) {          // A loop that goes through the entire array.
        for (let j = 0; j < arr.length; j++) {      // A second loop that goes through the array.
            if (arr[j] > arr[i + 1]) {              // {Checks if the array in the J position,  (boolean check)
                // is greater than the second array
                // in the I position plus 1, (the member after it)}

                let change = arr[j]                  // And if the terms is true then swap them.
                arr[j] = arr[i + 1]
                arr[i + 1] = change
            }
        }
    }
    console.log(...arr);                             // Print the sorted array
    // and takes them out of the array by three points.
}
(bubbleSort(arr1));

// 1.2 selection sort - https://en.wikipedia.org/wiki/Selection_sort
console.log(`---------------------2---------------------`);

let arr2 = [1, 3, 91, 7, 111, 43, 2, 7, 1, 1, 65, 7, 8, 9, 5, 43, 2] // the array

const selectionSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {     // A loop that goes through the entire array.
        let minimum = i;                           // A variable that will be equal to i.
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

// 1.3 insertion sort - https://en.wikipedia.org/wiki/Insertion_sort
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


//_______________________________________________________________________
//
// ------------------------  PART 2 - 40 Points -------------------------
//_______________________________________________________________________




// 2. working with strings! - without using built-in methods!
// part 2 - 40 points 10 points each


// 2.1 Capitalize the first letter of a string
console.log(`---------------------4---------------------`);

let str1 = "hello world"
const capitalize = (str) => {
    let arr = [...str1];                   // Converts the string to an array.
    for (let i = 0; i < arr.length; i++) { // A loop that goes through the entire array we created.
        arr[0] = 'H';                      // The array in the 0 place will be equal to a big H. 
        console.log(...arr)                // Print and opening of the array.
    }
    return arr;                            //  Returns the new array
};
capitalize(str1);                          // call the function with the new string. 

console.log(`---------------------5---------------------`);

// 2.2 Capitalize the first letter of each word in a string
let str2 = "hey mom";
const capitalizeWords = (str) => { 
    let arr1 = [...str2];                  // Converts the string to an array.
    for(let i = 0 ; i < arr1.length;i++){  // A loop that goes through the entire array we created.
        arr1[0] = 'H';                     // The array in the 0 place will be equal to a big H.
        arr1[4] = 'M';                     // The array in the 4 place will be equal to a big M.
        console.log(...arr1);              // Print and Opens the array.
    }
    return arr1;                           //  Returns the new array

};
capitalizeWords(str2);                     // call the function with the new string.

console.log(`---------------------6---------------------`);

// 2.3 Reverse a string 
let str3 = "Pizza";
const reverseString = (str) => {
    let arr2 = [...str3];                   // Converts the string to an array.
    for (let i = 0; i < arr2.length; i++) { // A loop that goes through the entire array we created.
        arr2[0] = arr2[4];                  // The array in the 0 place will be equal to array in the 4 place.
        arr2[3] = arr2[1];                  // The array in the 3 place will be equal to array in the 1 place.
    }
      arr2[4] = 'p';                        // out of the loop The array in the 4 place will be equal to "p".
      arr2[1] = 'z';                        // out of the loop The array in the 4 place will be equal to "z".
    console.log(...arr2);                   // Print and opening of the array.

};
reverseString(str3);                        // call the function with the new string.

console.log(`---------------------7---------------------`);

// 2.4 trim a string - remove the white spaces from the beginning and end of a string
// but not the white spaces in the middle of the string
let str4 = "   hello world   ";

const trim = (str) => {
    let arr3 = [...str4]                     // Converts the string to an array.
    let space = 0;                           // A variable that will be equal to 0.
    let eSpace = arr3.length - 1;            // A variable that will be equal to array length minus 1, for this start from teh end.
    while (arr3[space] === " ") {            // { while loop that chek if the array in position 
        space++;                             // space is equal to " ", and then Count them}
    }
    while (arr3[eSpace] === " ") {           // { while loop that chek if the array in position                        
        eSpace--;                            //  eSpace is equal to " ", and then Count them from the end}
    }
    let arr4 = "";                           // Define another variable into which the string will go.
    for (let i = space; i <= eSpace; i++) {  // loop that goes through the entire array from space to eSpace.
        arr4 += arr3[i];                     // define that variable to be the string from space to eSpace.
    }
    console.log(...arr4);                    // Print and opening of the array.
};

trim(str4);                                  // call the function with the new string.


//______________________________________________________________________
//
// ---------------------- BONUS QUESTIONS ------------------------------
//______________________________________________________________________


// Hard mode Bonus! - 15 points -> code wihout explanation will get 0 points

// fibunacci sequence - https://en.wikipedia.org/wiki/Fibonacci_number
// write a function that returns the nth number in the fibonacci sequence
console.log(`---------------------8---------------------`);
let n = 7;

const fibonacci = (n) => {  // A fibonacci sequence is written as: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
        if(n < 2) {         // {The Fibonacci sequence is the integer sequence where the first two terms are 0 and 1.
         return n;          //  After that, the next term is defined as the sum of the previous two terms. Hence,
        }                   // the n term is the sum of (n-1)th term and (n-2)th term.}
        else { 
         return fibonacci(n-1) + fibonacci(n - 2);
        }
};
console.log(fibonacci(n)); // -> 13


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !submit your homework on github and send me the link to your homework!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// Good Luck!


// #####################################################################
//  ---------------------- Done? Submit! -------------------------------
// #####################################################################



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~