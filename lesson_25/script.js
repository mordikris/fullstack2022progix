let x = 10;
let y = 25;


try{
    let p = x + y;
    if (p > 100)throw `it's nott true`;
    if (p == 35)throw `it's true`;
    if (p < 100)throw `it's probebly true`;
}catch(e){
    console.log(e ,`u do somthing wrong`)
}


// task 2 

let h = "hello world"
try{
    s = Number(h)
    console.logg(s)
}catch(err){
    console.log(`this is not a number ${err}`)
}

// task 3 



try{
    let a = toString(x)
    console.logg(a)
}catch(err){
    console.log(`this is not a stringg ${err}`)
}
