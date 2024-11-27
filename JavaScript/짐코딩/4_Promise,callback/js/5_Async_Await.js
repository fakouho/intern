'user strict'
function getUser(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const user = userId>0 ?
                { id: userId, nm: '강우석' } : null
                resolve(user);
            } catch (error) {
                reject(error);
            }
        }, 1000);
    });
}


function getPosts(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const posts = [
                    { id: 1, title: 'Post1' },
                    { id: 2, title: 'Post2' },
                ]; 
                resolve(posts); 
            } catch (error) {
                reject(error); 
            }
        }, 2000);
    });
}
async function runAsyncAwait() {
    try{
        const user=await getUser(1);
        
        const posts= await getPosts();
        console.log(user)
        console.log(user.id)
        console.log(posts)
    }catch{
        console.log('errer',errer)
    }
    
}
runAsyncAwait();
// function runPromise(){
//     getUser(1)
//         .then((user)=>{
//             if(user){
//                 console.log(user)
//             }else{
//                 console.log('문장이 비어있습니다.')
//             }
//         })
//         .catch((error)=>{

//         })
//         .finally(()=>{
//             console.log('종료')
//         })
// }

//runPromise();