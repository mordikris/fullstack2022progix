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

//  *  get the data from json file  *  //
let Data_Base;
let DBase_pas;

let json = fetch('../../assets/static/users.json')
  .then(r => r.json())
  .then(data => {
    Data_Base = data.users;
    console.log(Data_Base);
  })

// * function that go all over the json file with loop and check if it is the same to what i put on,
// and returnt true * //
function inDateBase(username, password) {
  for (let i = 0; i < Data_Base.length; i++) {
    if (Data_Base[i].username == username && Data_Base[i].password == password) {
      return true;
    }
  }
  return false;

}


// * function that semd me to other link i choose * //
function redirect(link) {
  window.location.assign(link)
}


/* function login that check the input
   against the json file and make another Feature */
function login() {
  let userval = document.getElementById('userName').value;
  let passval = document.getElementById('password').value;
  if (inDateBase(userval, passval)) {
    sessionStorage.setItem("isLogin", true);
    sessionStorage.setItem("username", userval);
    redirect('../../src/base.html');
    // return redirect("../../index.html");
  } else {
    sessionStorage.setItem("isLogin", false)
    return alert(`it's the wrong username or password`);
  }
}

/* A condition that checks if sessionstorage is false,
 and if it is false causes the other select-link not to run until it is true */

 if(sessionStorage.getItem("isLogin") == "true"){
  $(".my_pages").prop("disabled",false);
} else {
    $(".my_pages").prop("disabled",true);
}

/*צריך לעשות :
1. עוד פונקציה לאדמין ולהוסיף שיראה דברים ואוםציות מיוחדות
2. להוסיף ללוגין הרגיל מעבר לדף חדש לאחר התחברות
3. לפתוח דף חדש של הרשמה*/