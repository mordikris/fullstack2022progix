// *  makinng the navbar for all page's  * //
document.getElementById('navbar').innerHTML = `
<nav>
    <ul>
      <li><button id="darkmode-button" class="darkmode" placeholder = "DarkMood"></button></li>
      <li>
      <select class = "my_pages" disabled>
        <option value="#">My pages</option>
        <option value="#">Link 1</option>
        <option value="#">Link 2</option>
        <option value="#">Link 3</option>
      </select>
      </li>
      <li><a href="../../src/base.html">Home</a></li>
      <li><a href="login.html">login</a></li>
      <li><a href="../../website/contect/index.html">make a Contact</a></li>
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
document.getElementById('footer').innerHTML = `
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


/* function that take the value from the register
 input's and check the 2 password if they the same and add the user */


 const fs = require('fs');

 function addUserToDatabase() {
   // Get the values of the input fields
   let username = document.getElementById('userName').value;
   let password = document.getElementById('Password').value;
 
   // Read the existing data from the database file
   let data = JSON.parse(fs.readFileSync('../../assets/static/users.json'));
 
   // Create the new user object
   let newUser = {"username": username, "password": password};
 
   // Add the new user to the array of users
   data.users.push(newUser);
 
   // Write the updated data to the database file
   fs.writeFileSync('../../assets/static/users.json', JSON.stringify(data));
 }

 // * function that send me to other link i choose * //
function redirect(link) {
  window.location.assign(link)
}

/* triger for the button */
$('#register').click(()=>{
  addUserToDatabase()
  redirect("../../src/base.html")
})

/* A condition that checks if sessionstorage is false,
 and if it is false causes the other select-link not to run until it is true */

 if(sessionStorage.getItem("isLogin") == "true"){
  $(".my_pages").prop("disabled",false);
} else {
    $(".my_pages").prop("disabled",true);
}

