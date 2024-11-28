'use strict'

// $(document).ready(function() {
//     $('h1').click(function(e) {
//         $(this).hide();
//     });
// });

$('h1').click(function(e) {
    e.preventDefault(); 
    $(this).hide();
});

