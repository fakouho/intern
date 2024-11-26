'use strict'
let x = 10;
let y = 20;
let num = 1;

// 문자 병합
// 문자열과 숫자출력시 -> 문자열로 출력
console.log('문자 병합')
console.log('hello'+'world');
console.log('8'+3);
console.log(5+7+'3')

// 산술 연산자
console.log('산술 연산자')
console.log(100+3);
console.log(100-3);
console.log(100/3);
console.log(100*3);
console.log(100%3);

// let a=prompt('숫자 입력')
// if(a%2===1){
//     alert('홀수입니다.')
// }else{
//     alert('짝수입니다.')
// }

//증감 연산자
console.log('증감 연산자');

console.log(--num);
console.log(++num);
console.log(num--);
console.log(num++);

//비교 연산자

console.log('비교 연산자');
console.log(x>y);
console.log(x<y);
console.log(x===y);
console.log(x==y);
console.log(x!=y);

//할당 연산자
console.log('할당 연산자');
// console.log(x+=y);
// console.log(x-=y);
// console.log(x*=y);
// console.log(x/=y);

for(let i = 0; i<=10;i++){
    num+=i;
    console.log(`${i}번째 증가 현황: ${num}`)
}