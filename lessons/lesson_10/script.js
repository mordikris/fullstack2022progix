// prapractice_1 //
function myfunction(x) {
   return (x * 53);
}
console.log(myfunction(4));

// practice 2 //

function myfunction2(x, y) {
   return (x ** y);
}
console.log(myfunction2(4, 5));

// practice 3 //

function myfunction3() {
   let nul1 = prompt("enter nul1:");
   let nul2 = prompt("enter nul2:");
   let nul3 = prompt("enter nul3:");
   let nul4 = prompt("enter nul4:");
   let nul5 = prompt("enter nul5:");

   alert(nul1 + nul2 + nul3 + nul4 + nul5);

}

myfunction3();

// practice 4 //

function myfunction4() {
   let fname = prompt("Your First Name is:");
   let iname = prompt("Your Last Name Is:");
   let age = prompt("your years old:");


   alert("Your First Name is: " + fname + "\nYour Last Name Is: " + iname + "\nyour years old: " + age);

}
myfunction4();

// some homwork shit //

function mordi(s) {
   if (s == 0) {
      return 0;
   }
   console.log(s);
   return mordi(s - 1);
}

console.log(mordi(5));




