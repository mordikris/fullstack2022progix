// pra1 //
function getRandomNumber(min,max){
    return Math.floor(Math.random()*(max - min + 1))+ min;

}
let x = getRandomNumber(12,120);

if (x < 18) {
    console.log(x, "not valid");
}
// pra 2 //
else if (x >= 18) {
    console.log("You are still young but good to go");
}
// pra 3 //
else if (x > 30) {
    console.log("Aging like a fine wine aren’t you?");
}
// pra 6 //
else if (x == 50) {
    console.log("GOLDEN");
}
// pra 4 //
else if (x > 60) {
    console.log("Please, call me sir");
}
// pra 5 //
else if (x > 95) {
    console.log("Most Valuable Grandpa !");
}



