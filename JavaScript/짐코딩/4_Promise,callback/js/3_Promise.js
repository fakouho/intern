// const myPromise = new Promise((resolve, reject) => {
//     // 비동기 작업 처리
//     setTimeout(() => {
//         const text = prompt('메시지를 입력하세요:'); 
//         if (text === 'hello') {
//             resolve('good'); 
//         } else {
//             reject('error message'); 
//         }
//     }, 2000);
// });

// myPromise
// // 성공
// .then(function(result){
//     console.log('result:',result)
// })
// // 실패
// .catch((err)=>{
//     console.log('err:',err)
// })
// // 종료시 실행
// .finally(()=>{
//     console.log('good')
// })

const myPromise= new Promise((resolve,reject)=>{
    const text= prompt();
    if(text==='hello'){
        resolve('good')
    }else{
        reject('ㅜㅜ')
    }
});

myPromise
    .then((result)=>{
        console.log(result)
    })
    .catch((err)=>{
        console.log(err)
    })
    .finally(()=>{
        console.log('fially')
    })