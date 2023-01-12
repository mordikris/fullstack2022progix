// pra_1 //

const car = {
    firstName: "mazda 2",
    lastName: "demio",
    carName: "killer mazdush",
    carAge: "11",
    fullName: function () {
        return this.firstName + " " + this.lastName + " " + this.carName;
    }
};
console.log(car.fullName());

// pra_2 //

const bdate = new Date(1996, 2, 7, 15, 15, 15);
console.log(bdate);

// pra_3 //

const kris = {
    firstName: "mordechay yoav",
    lastName: "krispel",
    age: 26.8,
    eyeColor: "brown",
    bdate
};

console.log(kris);

// pra_4 //

const sdate = new Date(1996, 14, 41, 15, 15, 15);
console.log(sdate);

// -- If you put a number of months higher than 12, then the JS adds it to the number of years. -- //
// -- If you put a number of days higher than 30, then the JS adds it to the number of months. -- //
// -- And so on.. -- //




