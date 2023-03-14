/**
 * I made a mistake in the last lesson and I'm fixing it here.
 * 
 * 
 * Pass By Value -> Primitive Types (Number, String, Boolean)
 *      - When you pass a primitive type to a function, you are passing a copy of the value      
 *
 * Pass By Reference -> Objects (Array, Object, Function)
 *      - When you pass an object to a function, you are passing a reference to the object
 * 
 * 
 */

// this will be the functions we use to build the game
function reset() {
    // Reset the game
    for (let i = 0; i < buttonArray.length; i++) {
        buttonArray[i].textContent = "";
    }
    counter = 0;
}

function ArrayToMatrix(arr, num) {
    // Convert an array to a matrix for easier mental math
    let matrix = [], i, k;
    // k is the number of columns
    // i is the number of rows

    for (i = 0, k = -1; i < arr.length; i++) { // i is the number of rows and k is the number of columns
        if (i % num == 0) {
            k++;
            matrix[k] = [];
        }
        matrix[k].push(arr[i]);
    }
    return matrix;
}


function checkForWin(matrix, symbol) {
    let Rcounter, Ccounter, Acounter, TAcounter;

    for (let i = 0; i < matrix.length; i++) {
        Rcounter = 0;
        Ccounter = 0;
        Acounter = 0;
        TAcounter = 0;

        for (let j = 0; j < matrix[i].length; j++) {

            if (matrix[i][j].textContent == symbol) {
                // check for row
                Rcounter++;
            }

            if (matrix[j][i].textContent == symbol) {
                // check coliu
                Ccounter++;
            }
            if (matrix[j][j].textContent == symbol) {
                Acounter++;
            }
            if (matrix[j][matrix.length - j - 1].textContent == symbol) {
                TAcounter++;
            }

        }
        if (Rcounter == matrix.length ||
            Ccounter == matrix.length ||
            Acounter == matrix.length ||
            TAcounter == matrix.length) {
            return true;
        }
    }
    return false;
    // Check for a win

}



function checkforTie(array) {
    // Check for a tie
    for (let i = 0; i < array.length; i++) {
        if (array[i].textContent == "") {
            return false
        }
    }
    return true;
}

function playersName() {
    let playerX = prompt(`player X enter your name`);
    let playerO = prompt(`player O enter your name`);
    document.getElementById("nameX").textContent = playerX;
    document.getElementById("nameO").textContent = playerO;
    p1['name'] = playerX;
    p2['name'] = playerO;
}

function incrementScor(symbol){
    if(symbol == 'X'){
        p1['point']++;
        document.getElementById("player_X").textContent = p1['point'];
    }else{
        p2['point']++;
        document.getElementById("player_O").textContent = p2['point'];
    }
}

function resetAll(){
    reset()
    document.getElementById("nameX").textContent = ` ` ;
    document.getElementById("nameO").textContent = ` `;
    document.getElementById("player_X").textContent = 0;
    document.getElementById("player_O").textContent = 0;
    // p1['point'] = 0;
    // p2['point'] = 0;
}

let matrix1 = []

// Game Logic
let counter = 0; // Keep track of the number of turns
let p1 = {
    name: "player 1",
    point: 0
};
let p2 = {
    name: "player 2",
    point: 0
};

let buttonArray = document.querySelectorAll(".btn"); // Get all the buttons

let coArray = []; // Create an array to store the coordinates of the buttons
buttonArray.forEach((button) => {
    coArray.push(button); // Push the buttons to the array
});

let matrix = ArrayToMatrix(coArray, Math.floor(Math.sqrt(coArray.length))); // Convert the array to a matrix

// console.log(matrix);

// let counter_X = 0;
// let counter_O = 0;
// let player_X = 0;
// let player_O = 0;

// const namesPlayers = () =>{
//     let playerName_X =prompt("player X what is your name?");
//     let playerName_O =prompt("player O what is your name?");

//     document.getElementById("player_name_X").textContent = playerName_X;
//     document.getElementById("player_name_O").textContent = playerName_O;
// }



for (let i = 0; i < buttonArray.length; i++) { // Loop through the buttons and add an event listener to each one

    buttonArray[i].addEventListener("click",
        function () {
            let symbol;
            if (counter % 2 == 0 && buttonArray[i].textContent == "") {
                buttonArray[i].textContent = "X";
                counter++;
                symbol = 'X';
            } else if (counter % 2 != 0 && buttonArray[i].textContent == "") {
                buttonArray[i].textContent = "O";
                counter++;
                symbol = 'O';
            } else {
                alert("This button is already clicked!");
            }

            if (checkForWin(matrix, symbol)) {
                alert(`${symbol} has wonnn!!`)
                incrementScor(symbol);
                reset()
            }
            if (checkforTie(coArray)) {
                alert("only full get til here haha")
            }

        }
    )
}