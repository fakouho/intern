'use strict'


$('.abtn').on('click',function(){
    $('#a').fadeIn()
    $('#b').fadeIn()
    $('#c').fadeIn()
})


$('.bbtn').on('click',function(){
    $('#a').fadeOut()
    $('#b').fadeOut()
    $('#c').fadeOut()
})

$('.cbtn').on('click',function(){
    $('#a').fadeToggle()
    $('#b').fadeToggle()
    $('#c').fadeToggle()
})

//영역 유지
$('.close').on('click', function() {
    $('#a').css('opacity', '0');
    $('#b').css('opacity', '0');
    $('#c').css('opacity', '0');
});


$('.open').on('click', function() {
    $('#a').css('opacity', '1');
    $('#b').css('opacity', '1');
    $('#c').css('opacity', '1');
});
