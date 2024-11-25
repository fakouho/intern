'use strict'
//1.for문
for(let i = 0;i<5;i++){
    console.log(i)
}

let arr = ['강','아','리'];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//2. for in문
let person = {
    nm:"강우석",
    ag:25,
    jop:"개발자"
}
for(let key in person){
    console.log(key,person[key])
}
//3. for of문
for(let ob of arr){
    console.log(ob)
}

//4. while문
let wh1=0;
while(wh1<2){
    console.log(wh1)
    wh1++
}

//5. do while문
let wh2=0;
do{
    console.log('do while문에서는 do가 무조건 반복 실행합니다.')
    wh2++
}while(wh2<10){
    console.log(wh2)
    wh2++
}