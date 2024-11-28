'use strict'
// $('h1').click(function(){
//     $(this).css('background','yellow')    
// })
// $('h1').mouseleave(function(){
//     $(this).css('background','')    
// })

//on메서드
$('h1').on({
    click :function(){
        $(this).css('background','yellow')    
    },
    mouseleave :function(){
        $(this).css('background','')    
    }
})
