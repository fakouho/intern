'use strict'
$(document).ready(function(){
    $('div').on('mouseover', function(){
        $('span').text($(this).css('background-color')); 
    });
    $('div').hover(
        function() {
            $(this).css('border', '5px solid red');
        },
        function() {
            $(this).css('border', '');
        }
    );
})