// *  makinng the navbar for all page's  * //
document.getElementById('navbar').innerHTML = `
  <nav>
    <ul>
      <li><button id="darkmode-button" class="darkmode" placeholder = "DarkMood"></button></li>
      <li>
      <select class = "my_pages" disabled> 
        <option value="#">My pages</option>
        <option value="../website/tictactoe/index.html">tic tac toe</option>
        <option value="#">Link 2</option>
        <option value="#">Link 3</option>
      </select>
      </li>
      <li><a href="base.html">Home</a></li>
      <li><a id="log" href="../login/src/login.html">login</a></li>
      <li><a href="../website/contact/index.html">make a Contact</a></li>
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
/* here is a function that check if the user is login,
   and if it is so the pic changh
   and it say welcom to the user
   and make the logout button */
function manip(){
    if(sessionStorage.getItem("isLogin") == "true"){
      $('#h_one').text(`welcome ${sessionStorage.getItem("username")} !!`);
      $('#changhValue').text(`now you goin to realy have som fun !`);
      $('#happyP').css("background-image", "url(https://media.tenor.com/_z0ExypLSCwAAAAC/youre-one-of-us-now.gif)");
      $('#happyP').css("width", "450px");
      $('#happyP').css("height", "300px");
      $('#happyP').css("margin", "auto");
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


// * function that send me to other link i choose * //
function redirect(link) {
  window.location.assign(link)
}


/* A condition that checks if sessionstorage is false,
 and if it is false causes the other select-link not to run until it is true */

if(sessionStorage.getItem("isLogin") == "true"){
  $(".my_pages").prop("disabled",false);
} else {
    $(".my_pages").prop("disabled",true);
}
