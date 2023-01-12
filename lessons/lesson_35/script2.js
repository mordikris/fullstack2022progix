///  prac 1.1  ///

let str = 'mordechay yoav krispel'
function removeVowels(string) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let modifiedString = "";
    for (let i = 0; i < string.length; i++) {
        if (vowels.indexOf(string[i]) === -1) {
            modifiedString += string[i];
        }
    }
    return modifiedString;
}
console.log(removeVowels(str));

///  prac 1.2  ///

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
function evenNumber(array) {
    let newarr = []
    for (let i = 0; i < array.length; i++) {
        if (arr[i] % 2 == 0) {
            newarr.push(array[i])

        }

    }
    return (newarr)
}
console.log(evenNumber(arr));


///  prac 1.3  ///


/*Write a function that takes an array of strings
 as input and returns an array of all the strings
  that have more than 5 characters. For example, the array ["apple", "banana", "grape", "pear"] should return ["banana", "grape"]. */

// let someWords = ['hulala', 'shalom', 'hay', 'ma', 'momo']
// let newarr2 = []
// for (let i = 0; i < someWords.length; i++) {
//     if (someWords[i].length == 5) {
//         newarr2.push(someWords[i]);
//     }
// }

// console.log(newarr2);

let words = ['hulala', 'shalom', 'hay', 'ma', 'momo', 'wassup', 'pear', 'banana'];
let fiveLetterWords = [];

function five() {
    let i = 0;
    while (i < words.length) {
        if (words[i].length == 5) {
            fiveLetterWords.push(words[i]);
        }
        i++;
    }
    return fiveLetterWords
}
console.log(five(words));
// for (let i = 0; i < words.length; i++) {
//     if (words[i].length == 5) {
//         fiveLetterWords.push(words[i]);
//     }
// }

// console.log(fiveLetterWords);  // Output: ['house']


