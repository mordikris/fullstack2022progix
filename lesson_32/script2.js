//  --  pract 1.1  --  //

$('.btn-hide').click(() => {
    $('.hw').toggle();
})

//  --  pract 1.2  --  //


$("div").click(() => {
    $('#somsom').hide();
})

//  --  pract 1.3  --  //

$('.btn-hide-first').click(() => {
    $("h2:first").hide();
})

//  --  pract 2.1  --  //

$('.btn-hide').mouseenter(() => {
    $('.hw').css('background-color', 'green')
});

$('.btn-hide').mouseleave(() => {
    $('.hw').css('background-color', 'white');
})

//  --  pract 2.2  --  //
$('.db-click').dblclick(() => {
    $("h5").text('u tap me 2 tiime !')
})

//  --  pract 2.3  --  //
$('#h5').mouseenter(() => {
    $('#h5').css('color', 'blue')
})
$('#h5').mouseleave(() => {
    $('#h5').css('color', 'brown')
})