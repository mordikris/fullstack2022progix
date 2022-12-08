
// let json = fetch("./dataBase.json")
//     .then(Response => Response.json())
//     .then(data => dataB = data)
// let dataC = dataB["test_user"];
// let dataUs = dataC["username"];
// let dataPas = dataC["password"];

// function login() {
//    
//     if (us == dataUs && pas == dataPas) {
//         return alert ("u made it")
//     //  return  document.querySelector(`#id_welcome`).src = "static/files_order.png";
//     }
// }

let Data_Base;

let json = fetch('../dataBase.json')
    .then(r => r.json())
    .then(data => {
        Data_Base = data;
    })
let showUser = () => {
    alert(`username is : ` + Data_Base.test_user.username + `password is : ` + Data_Base.test_user.password);
}

// function redirect() {
//     if ((Data_Base.test_user.username === user) && (Data_Base.test_user.password === password)) {
//         window.location.assign("https://www.intercom.com/blog/welcome-page/");
//     } else {
//         alert(`it's the wrong username & password`)
//     }

// }
function redirect(link) {
    window.location.assign(link)
}
function redirect2(){
    window.location.assign("login.html");
}
function morph() {
    if (location.pathname == "/lesson_24/src/index.html") {
        if (sessionStorage.getItem("isLogin") == "true") {
            document.getElementById("userH").textContent = `welcome back ${sessionStorage.getItem("username")}`;
            document.getElementById("img").style.backgroundImage = "url(https://avi-home.co.il/wp-content/uploads/2021/01/AS373714.jpeg)";
            document.getElementById("log").style.display = "none";
             let createButton = document.createElement("button");
             document.getElementById("logout") = createButton ;
             createButton.innerText="log out";


        } else {
            console.log(localStorage.getItem("isLogin"));
            console.log(location.pathname);
        }
    }
    else {
        console.log(localStorage.getItem("isLogin"));
        console.log(location.pathname);
      }
    }

function login() {
    let user = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (user == Data_Base.test_user.username && password == Data_Base.test_user.password) {
        sessionStorage.setItem("isLogin", true);
        sessionStorage.setItem("username", Data_Base.test_user.username);
        redirect("index.html")
    } else {
        alert(`it's the wrong username or password`);
        sessionStorage.setItem("isLogin", false)
    }
}

morph();
// need logout button !! //
// function redirect3(){

//     window.location.assign("index.html");
// }
