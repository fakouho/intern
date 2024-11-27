'use strict'

// const myPromist=Promise.resolve(100);
// //변수 값을 이행되는 primise 작업을위해 resolve 생성 

// myPromist
//     .then( value=>value/2)
    
//     .then(value=>{
//         console.log(value);
//         return value/10}
//     )
    
//     .then(console.log)

// const myPromist=Promise.reject('errer massage');

// const promise1=Promise.resolve(1000);
// const promise2=new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve(3000)
//     },3000)
// })

// Promise.all([promise1,promise2])
//     .then(console.log)
//     .catch(console.error)


const promise1 = Promise.resolve(100);
const promise2 = Promise.reject('에러 발생');
Promise.allSettled([promise1, promise2])
    .then((data) => {
        console.log('모든 상태:', data);
    });