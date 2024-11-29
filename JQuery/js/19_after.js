'use strict';

$('#btn').on('click', function() {
    $('ul li:first').before('<li>before로 만든 0번째</li>');

    
    $('ul li:last').after('<li>after로 만든 5번째</li>');
});
