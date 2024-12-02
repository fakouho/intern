'use strict'

$(document).ready(function(){
    $('#btn').on('click',function(){
        $('.div1').remove() //영역 자체 제거
        // $('.div1').empty(); //내부 자식 영역 제거
        // $('p:nth-child(2)').remove();
        // $('.div1 p:nth-child(3)').text('강아리3')
        // $('.div1').append('<p>강먼지 등장</p>')
        // $('.div1 p:nth-child(2)').before('<p>강먼지 두두둥장</p>')
    })
})