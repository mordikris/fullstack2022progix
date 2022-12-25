
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
    alert(`username is : ` + Data_Base.users.username + `password is : ` + Data_Base.users.password);
}

function redirect(link) {
    window.location.assign(link)
}


function redirect2() {
    window.location.assign("login.html");
    if (location.pathname == "/lessons/lesson_24/src/index.html") {
        if (sessionStorage.getItem("isLogin") == "true") {
            hLogOut();
        }
    }
}


function hLogOut() {
    window.sessionStorage.clear();
    window.location.reload(true);
    window.location.replace('../src/index.html');
}


function morph() {
    if (location.pathname == "/lessons/lesson_24/src/index.html") {
        if (sessionStorage.getItem("isLogin") == "true") {
            document.getElementById("userH").textContent = `welcome back ${sessionStorage.getItem("username")}`;
            document.getElementById("img").style.backgroundImage = "url(https://avi-home.co.il/wp-content/uploads/2021/01/AS373714.jpeg)";
            document.getElementById("log").textContent = `log-out`
            // document.addEventListener("click", hLogOut);

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
        if (user == Data_Base.users.username && password == Data_Base.users.password) {
            sessionStorage.setItem("isLogin", true);
            sessionStorage.setItem("username", Data_Base.users.username);
            return redirect("index.html");
            // hLogOut();
        } else {
            sessionStorage.setItem("isLogin", false)
            return alert(`it's the wrong username or password`);
        }
    }

    


morph();
// need logout button !! //
// function redirect3(){

//     window.location.assign("index.html");
// }
