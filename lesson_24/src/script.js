
let dataB;
let json = fetch("./dataBase.json")
    .then(Response => Response.json())
    .then(data => dataB = data)
let dataC = dataB["test_user"];
let dataUs = dataC["username"];
let dataPas = dataC["password"];

function login() {
    let us = document.getElementById("username").value;
    let pas = document.getElementById("password").value;
    if (us == dataUs && pas == dataPas) {
        return alert ("u made it")
    //  return  document.querySelector(`#id_welcome`).src = "static/files_order.png";
    }
}


