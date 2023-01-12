sessionStorage = false;
// *  makinng the navbar for all page's  * //
document.getElementById('navbar').innerHTML = `
  <nav>
    <ul>
      <li><button id="darkmode-button" class="darkmode" placeholder = "DarkMood"></button></li>
      <li>
      <select class = "my_pages"> 
        <option value="#">My pages</option>
        <option value="index.html">tic tac toe</option>
        <option value="#">Link 2</option>
        <option value="#">Link 3</option>
      </select>
      </li>
      <li><a href="../../src/base.html">Home</a></li>
      <li><a id="log" href="../../login/src/login.html">login</a></li>
      <li><a href="../contact/index.html">make a Contact</a></li>
    </ul>
  </nav>
`;

/* I added an eventlistener to the select element
   so that the drop-down menu would be clickable
   and possible to transfer links */
const selectElement = document.querySelector(".my_pages");

selectElement.addEventListener("change", event => {
  const selectedOption = event.target.value;
  window.location.href = selectedOption;
});

// making the footer link and dascription //
document.getElementById('footer').innerHTML =`
<footer>
  <div class="footer-container">
    <p>Stay connected with us:</p>
    <ul class="">
      <li>
        <a href="http://www.example.com/contact">Contact us</a>
      </li>
      <li>
        <a href="http://www.facebook.com/example">
          Follow us <br> on Facebook <i class="fab fa-facebook-square"></i>
        </a>
      </li>
      <li>
        <a href="http://www.instagram.com/example">
          Follow us <br> on Instagram <i class="fab fa-instagram"></i>
        </a>
      </li>
    </ul>
    <p>Thank you for visiting our site!</p>
  </div>
</footer>
`;
// *  working on the DarkMode button  * //
let button = document.getElementById("darkmode-button");
function toggleDarkMode() {
  document.body.classList.toggle("darkmode");
  localStorage.setItem("darkmode", document.body.classList.contains("darkmode"));
}
button.addEventListener("click", toggleDarkMode);

let darkmode = localStorage.getItem("darkmode");
if (darkmode === "true") {
  document.body.classList.add("darkmode");
}


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
/* here is a function that check if the user is login,
   and if it is so it make the logout button */
function manip(){
    if(sessionStorage.getItem("isLogin") == "true"){
      document.getElementById("log").textContent = `logout`
    }else {
      console.log(localStorage.getItem("isLogin"));
      console.log(location.pathname);
  }
}

manip()

/* function that log out everithing
 and clear the sessionStorage by clickin on logout */
function hLogOut() {
  if(sessionStorage.getItem("isLogin") == "true"){
  window.sessionStorage.clear();
  window.location.reload(true);
  }
}
$('#log').click(()=>{
  hLogOut()
})

