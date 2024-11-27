// 동기 작업
// function taskSyncFunction(callback){
//     console.log('첫번째 작업')
//     console.log('첫번째 작업')
//     callback();
// }

taskSuncFunction(function(){
    console.log('콜백 함수 실행')
})

//콜백 함수
function taskAsyncFunction(callback) {
    console.log('start');
    setTimeout(() => {
        console.log('첫번째 작업');
        console.log('두번째 작업');
        callback();
    }, 2000);
    console.log('end');
}

taskAsyncFunction(function () {
    console.log('콜백 함수 실행');
});
console.log('실행 완료');

//콜백 헬

// function getUser(userId,callback){
//     setTimeout(()=>{
//         const user = {id:userId, nm:'강우석'}
//         callback(user)
//     },1000)
// }

// function getPosts(userId,callback){
//     setTimeout(()=>{
//         const posts = [
//             {id:1,title:'Post1'},
//             {id:2,title:'Post2'}
//         ]
//         callback(posts)
//     },2000)
// }


// getUser(1,function(user) {
//     console.log('user:',user)
//     getPosts(user.id,(posts)=>{
//         console.log('posts',posts)
//     })

// })