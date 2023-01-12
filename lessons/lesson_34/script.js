$('.ans').click(() => {
    $('#hw').animate({
        left: '+=110px',  // move right by 50 pixels
        top: '+=110px'   // move down by 50 pixels
    }, 'slow', function () {  // animation duration is 1000 milliseconds (1 second)
        $('#hw').animate({
            left: '-=100px',  // move left by 100 pixels
            top: '-=100px'   // move up by 100 pixels
        }, 'fast', function () {  // animation duration is 1000 milliseconds (1 second)
            $('#hw').fadeOut();  // clear the animation
        });
    });
})

// prac 38.1 //

$('#mark').click(()=>{
    $('#markText').html('<mark>hello helloo paamaim</mark>')
})

// prac 38.3 //


let inpValue = document.getElementById('inp').value;
$('#btn3').click(()=>{
    $('#markText').text($('#markText').attr('id'));
})

// prac 38.3 //


$('#btn4').click(()=>{
    $('#markText').text($('#inp').val())
})

// prac 39.1 //

$('#btn5').click(()=>{
    $('.hw').before(`<mark>i made it</mark>`)
})
$('#btn6').click(()=>{
    $('.hw').after(`<mark>i made it</mark>`)
})

// prac 39.2 //

$('#btn7').click(()=>{
    $('ul').append('<li>new wassapp</li>')
})

// prac 39.3 //

$('#btn8').click(()=>{
    $('ul').empty()
})