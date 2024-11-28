'use strict'
$('input').focus(function(){
    $(this).css('background','red');
})

$('input').blur(function(){
    $(this).css('background','');
})