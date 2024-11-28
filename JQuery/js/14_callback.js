'use strict'

$('button').on('click', function() {
    $(this).hide(0, function() { 
        $(this).delay(5000).show(function(){
            console.log('다시 보여드릴게요 ')
        }); 
    });
});