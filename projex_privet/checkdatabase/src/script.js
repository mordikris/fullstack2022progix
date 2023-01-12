
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
    // redirect("login.html")
    window.location.assign("login.html");
    // if (location.pathname == "/projex_privet/checkdatabase/src/index.html") {
    //     if (sessionStorage.getItem("isLogin") == "true") {
    //         hLogOut();
    //     }
    // }
}


function hLogOut() {
    window.sessionStorage.clear();
    window.location.reload(true);
    window.location.replace('../src/index.html');
}


function morph() {
    if (location.pathname == "/fullstack2022/projex_privet/checkdatabase/src/index.html") {
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

// function login() {

//     let user = document.getElementById("username").value;
//     let password = document.getElementById("password").value;
//         if (user == Data_Base.users.username && password == Data_Base.users.password) {
//             sessionStorage.setItem("isLogin", true);
//             sessionStorage.setItem("username", Data_Base.users.username);
//             return redirect("index.html");
//             // hLogOut();
//         } else {
//             sessionStorage.setItem("isLogin", false)
//             return alert(`it's the wrong username or password`);
//         }
//     }

function login(password, username, database) {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let database = Data_Base;
    for (let i = 0; i < database.length; i++) {
        for (let j = 0; j < database[i].length; j++) {
            if (password === database[i][j].password && username === database[i][j].username) {
                sessionStorage.setItem("isLogin", true);
                sessionStorage.setItem("username", database[i][j].username);
                
            }
        }
        return redirect("index.html");
    }
    sessionStorage.setItem("isLogin", false)
    return alert(`it's the wrong username or password`);
}




morph();
// need logout button !! //
// function redirect3(){

//     window.location.assign("index.html");
// }
