'use strict'

$('#btn').on('click',function(){
    let text= $('p').text();
    console.log('text방식'+text)
    let html= $('p').html();
    console.log('html방식'+html)
    let val= $('#ip').val();
    console.log('val방식'+val)
    let attr= $('#hr').attr('href');
    console.log('attr방식'+attr)
})