'use strict'

$('#btn').on('click', function() {
    let i = 5;

    while (i < 10) {
        $('ul').append(`<li>${i} 번째</li>`);
        i++;
    }

    $('ul').prepend('<li>최초 번째</li>')
});