'use strict'
$(document).ready(function(){
    $('#wr').on('click',function(){
        $('p').wrap('<div class="ot">추가</div>')
    })
    $('#wra').on('click',function(){
        $('p').wrapAll('<div class="ot">추가</div>')
    })
    $('#uwr').on('click',function(){
        $('h3').unwrap()
    })
    $('#wri').on('click',function(){
        $('h3').wrapInner('<section class="inner-wrapper">고구마</section>')
    })
})