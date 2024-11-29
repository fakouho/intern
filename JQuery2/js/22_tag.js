    'use strict'
$(document).ready(function(){
    $('.btn1').on('click',function(){
        $('p').addClass('blue');
    })
    $('.btn2').on('click',function(){
        $('p').removeClass('blue');
    })
    $('.btn3').on('click',function(){
        $('p').toggleClass('blue');
    })
})