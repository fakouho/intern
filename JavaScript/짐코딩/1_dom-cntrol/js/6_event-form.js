let input_box = document.querySelector('#input_box');

input_box.addEventListener('keydown', function(e) {
    console.log(`Key Down`,event.key,event.keyCode);
});

input_box.addEventListener('keyup', function(e) {
    console.log(`Key Up`);
});

input_box.addEventListener('focus', function(e) {
    console.log(`focus`);
});
input_box.addEventListener('blur', function(e) {
    console.log(`blur`);
});
input_box.addEventListener('change', function(e) {
    console.log(`change`);
});

