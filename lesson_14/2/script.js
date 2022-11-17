// pra 1 //

const day = new Date().getDay()
switch (day) {
    case 0:
        console.log("It's Sunday, time to relax!");
        break;
    case 1:
        console.log("its f**king mondey");

    case 2:
        console.log("this is tuesday and we love to sleep");
        break;
    case 3:
        console.log("happy Wednesday");
        break;
    case 4:
        console.log("another day till the weekend!");
        break;
    case 5:
        console.log("its friday nighttt");
        break;
    case 6:
        console.log("the rest day!anem!");
        break;

    default:
        console.log("Something went horribly wrong...");


}

// pra 2 //

let i = 0;
while (i <= 100) {
    console.log(i, "\t", 100 - i);
    i = i + 2;
}
