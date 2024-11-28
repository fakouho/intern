'use strict'
$('button').on('click',function(){
    $('h1')
    .css('color','red')
    .slideUp(3000)
    .delay(2000)
    .slideDown(2000)
})