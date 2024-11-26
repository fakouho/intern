'use strict'


//논리 연산자
let x = true;
let y = false;
console.log('논리 연산자')
console.log(x&&y);
console.log(x||y);
console.log(!x);

let btn = document.querySelector('#btn')

btn.addEventListener('click',function(e){
    e.preventDefault();
    let email = document.querySelector('#email').value;
    let pw    = document.querySelector('#pw').value
    
    if(email === '' || pw === '' || !email.includes('@')){
        console.log('입력을 확인해주세요')
    }else{
        console.log(`${email}님 환영합니다.`)
    }
})

//삼항 연산자
let str=prompt('입력해주세요')
str%2===0 ? console.log('짝수입니다'):console.log('홀수입니다.');