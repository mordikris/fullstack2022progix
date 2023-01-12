function rus() {
    let rus1 = document.getElementById("num1").value;
    let rus2 = Math.trunc(rus1);
    let calc = rus2 + 10;

    // if(typeof(calc) != typeof(0)){
    //     document.getElementById("answer").innerHTML = ('');
    // }

    if (typeof (calc) == typeof (0)) {
        document.getElementById("answer").innerHTML = calc;
    } else {
        alert("just number please :(");
    }

}

function marcus() {
    let day = new Date().getDay();
    let day2;
    switch (day) {
        case 0:
            day2 = "Sunday"
                console.log("Sunday")
            break;
        case 1:
            day2 = "Monday"
                console.log("Monday")
            break;
        case 2:
            day2 = "Tuesday"
                console.log("Tuesday")
            break;
        case 3:
            day2 = "Wednesday"
                console.log("Wednesday")
            break;
        case 4:
            day2 = "Thursday"
                console.log("Thursday")
            break;
        case 5:
            day2 = "Friday"
                console.log("Friday")
            break;
        case 6:
            day2 = "Saturday"
                console.log("Saturday")
            break;
        }
        document.getElementById("gur").innerHTML =`hello only to me yheea \t and have a nice ${day2}`;
    
}