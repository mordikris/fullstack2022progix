// pra 1 //

let e = 20.42311233;
let en = e.toString();
console.log(en);

let a = 90.467582;
let an = a.toString();
console.log(an);

let b = 16.989208;
let bn = b.toString();
console.log(bn);

// pra 2 //

let z = 15.42311233;
let zn = z.toFixed();
console.log(zn);

// pra 3 // 

let x = "14.78945";
let dx = " 1500 menny years";
console.log(parseInt(x));
console.log(parseInt(dx));

function mor(x) {
    if (typeof (x) == typeof (0)) {
        return x.toString();
    }
}
console.log(mor(112.409));
console.log(parseInt(mor(112.409)));
