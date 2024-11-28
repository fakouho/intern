'use strict'

// 마우스 관련기능 
// 열고 닥기
// $('#btn').dblclick(function(){
//     $('p').slideToggle();
// })
//영역에 마우스가 있을 때
$('p').mouseenter(function(){
    $(this).css('color','blue')
})
//영역에 마우스가 없을  떄
$('p').mouseleave(function(){
    $(this).css('color','black')
})
// 영역에 마우스 클릭 후 해제 시
$('p').mouseup(function(){
    $(this).css('color','pink')
})

// 영역에 마우스 클릭 시
$('p').mousedown(function(){
    $(this).css('color','red')
})
