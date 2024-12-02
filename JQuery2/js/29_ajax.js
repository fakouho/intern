'use strict';
$(document).ready(function(){
    
    // $('.btn').on('click', function(){
    //     $('#display').load('../js/test.html');
    // });

    // let btn=document.querySelector('.btn');
    // btn.addEventListener('click',function(){
    //     let display=document.querySelector('#display');
    //     let xhr = new XMLHttpRequest();
    //     xhr.open('get','../js/test.txt',true);
    //     xhr.send();
    //     xhr.onload=()=>{
    //         display.textContent=xhr.responseText;
    //     }
    // })

    // $('.btn').on('click', function(){
    //     $('#display').load('../js/test.html #a');
    // });
    // $('.btn').on('click', function(){
    //     $('#display').load('../js/test.html #a', 
    //         function(responseText,statusText,xhr){
    //         // 콜백  (   내용    , 성공여부 ,xhr객체       )  
    //         console.log(responseText)
    //         console.log(statusText)
    //         console.log(xhr)
    //         });
    // });

    // get방식
    // $('.btn').on('click',function(){
    //     $.get('../js/test.html',function(data,status){
    //         let gdata=$(data).find('#a');
    //         console.log(status)
    //         $('#display').html(gdata);
    //     })
    // })

    // //post 방식
    // $('.btn').on('click',function(){
    //     $.post('../js/test.html',function(data,status){
    //         let gdata=$(data).find('#a');
    //         console.log(status)
    //         $('#display').text(gdata);
    //     })
    // })
});
