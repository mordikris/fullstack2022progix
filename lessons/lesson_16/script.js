// let mor = document.addEventListener("copy", function () { });
// function _copy() {
//     document.getElementById("dod1").textContent = document.getSelection();
//     alert('you are copy this : ' + document.getSelection());
// }

// pra 1

document.addEventListener("copy", function () { });
function _copy() {
    document.getElementById("dod1").textContent = document.getSelection();
    alert(`you are copy this :` + " " + document.getSelection());
}
// pra 2

addEventListener("keydown", function (e) {
    let s = `${e.code}`
    document.getElementById('dod1').textContent = `You clicked: ${s[s.length - 1]} Key`

})
// document.addEventListener("keydown", rubi)
// function rubi(e){
//     alert (`you press on :` + (e.Code));
// };
