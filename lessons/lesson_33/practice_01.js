

let h = true;

function darkmood() {
    if (h) {
        h = false;
        // }
        //    if( $('body').css('background-color')=== 'rgb(255, 255, 255)'){
        $('body').css('background-color', 'black');
        $('body').css('color', 'white');
    } else {
        h = true;
        $('body').css('background-color', 'white');
        $('body').css('color', 'black')

    }
}

$('#btn').click(darkmood);
