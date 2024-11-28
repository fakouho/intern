'use strict'
$('h1').click(function(e) {
    e.preventDefault(); 
    $(this).hide();
});

$('.class').click(function(e){
    e.preventDefault();
    $(this).hide();
})

$('#id').click(function(e){
    e.preventDefault();
    $(this).hide();
})