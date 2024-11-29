'use strict'
$(document).ready(function(){
    // 자식 -> 부모
    // $('.a').parent().css({
    //     'border' : '5px solid pink'
    // })
    // $('.a').parents().css({
    //     'border' : '5px solid pink'
    // })

    // 부모 -> 자식
    // $('.b').children().css({
    //     'border' : '5px solid pink'
    // })
    // $('p').find('.a').css({
    //     'border' : '5px solid pink'
    // })

    //형제 -> 형제
    // $('p:nth-child(2)').nextAll().css({
    //     'border' : '5px solid pink'
    // })
    // $('li:nth-child(2)').prevAll().css({
    //     'border' : '5px solid pink'
    // })

    //필터기능
    $('li').first().css({
        'border' : '5px solid pink'
    })
    $('li').last().css({
        'border' : '5px solid pink'
    })
    $('li').eq(1).css({
        'border' : '5px solid pink'
    })
    $('li').not('.nt').css({
        'border' : '5px solid pink'
    })
})