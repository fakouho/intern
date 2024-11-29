'use strict'
$(document).ready(function(){
    let fr=$.noConflict();
    fr('button').on('click',function(){
        fr('.display').text('변경')
    })
})