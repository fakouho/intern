'use strict'

// function syncFunction(){
//     console.log('첫 번째 작업');
//     console.log('두 번째 작업');
//     console.log('세 번째 작업');
//     console.log('네 번째 작업');
// }
// syncFunction();

async function async() {
    console.log('첫 번째 작업');

    setTimeout(function(){
        console.log('두 번재 작업')
    },2000)
    console.log('세 번째 작업');
    
}
async()
