let input_box = document.querySelector('#input_box');

// 키보드 입력시
input_box.addEventListener('keydown', function(e) {
    console.log(`Key Down`,event.key,event.keyCode);
});

// 키보드 입력 해제시
input_box.addEventListener('keyup', function(e) {
    console.log(`Key Up`);
});

// 해당 input 영역 선택시
input_box.addEventListener('focus', function(e) {
    console.log(`focus`);
});

//해당 input 영역 해제시
input_box.addEventListener('blur', function(e) {
    console.log(`blur`);
});

// 해당 영역 value가 변경시
input_box.addEventListener('change', function(e) {
    console.log(`change`);
});

