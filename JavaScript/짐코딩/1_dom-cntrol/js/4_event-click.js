/*인라인 방식*/
function btn(){
    alert('ilLine')
}

/*프로퍼티 방식*/
let probtn = document.querySelector('.btn2')
probtn.onclick = function(){
    alert('프로퍼티 방식')
}

/*addEventListener*/
let addbtn = document.querySelector('.btn3')
addbtn.addEventListener('click',function(){
    alert('addEventListener1')
})

addbtn.addEventListener('click',alrt1)
function alrt1(){
    alert('hello world')
}
/*이벤트 제거*/
addbtn.removeEventListener('click',alrt1)