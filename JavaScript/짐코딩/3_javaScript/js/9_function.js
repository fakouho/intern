'use strict'
//함수

// 함수 선언식 -> 호이스팅 영향O
function hellow(){
    console.log('함수 선언식')
}
hellow();

//함수 표현식 -> 호이스팅 영향X
let hellow2=function(){
    console.log('함수 표현식')
}
hellow2();

//매개변수 활용
console.log('-----매개변수(파라미터)-----')
function userData(name='한국',age=39){
    console.log(`${name}님의 나이는 ${age}입니다.`)
}
userData('우석')

//반환값 활용
console.log('-----반환값-----')
function num(num1,num2){
    return num1+num2
}

console.log(num(2,3))

//함수 스코프
//자식은 부모를 상속받을수 있고 부모는 자식을 상속받을 수 엇다.
console.log('-----함수 스코프-----')
function title(){
    let tit = '그리드텍'
    function nm(){
        let nm1='강우석';
        console.log(`${tit}직원 ${nm1}`)
    }
    nm()
    console.log(`${tit}직원이다`)
}
title();

//Arrow Function
console.log('---ArrowFunction----')
let dog=(nm='아리',age=12)=>{
    console.log(`${nm}의 나이는${age}입니다.`)
}
dog('강아리')
