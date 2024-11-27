function getUser(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const user = { id: userId, nm: '강우석' };
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

getUser(1)
    .then((user)=>{
        console.log(user)
        return getPosts();
    })
    .then((posts)=>{
        console.log('posts:', posts);
    })
    .catch((error)=>{
        console.log(error)
    })
    .finally(()=>{
        console.log('실행종료')
    })

