'use strict'
$(document).ready(function(){
    $('.mbtn').click(function(){
        $('span').text('메인 세로'+$('.main').width()+'메인 가로'+$('.main').height())
    })
    // $('.sbtn').click(function(){
    //     $('span').text('서브 세로'+$('.surb').width()+'서브 가로'+$('.surb').height())
    // })
    $('.sbtn').click(function(){
        $('span').text('서브 세로'+$('.surb').innerWidth()+'서브 가로'+$('.surb').innerHeight())
    })
})