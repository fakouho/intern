'use strict'
$('.btns').on('click',function(){
    $('#ani_box1').animate({width:'500px'},30000)
})

$('.btnc').on('click',function(){
    $('#ani_box1').stop()
})