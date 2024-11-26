let moc = document.querySelector('.rectang')
let body = document.querySelector('body')
//1. 영역을 클릭했을 떄
// moc.addEventListener('mousedown',function(e){
//     console.log('mousedown')
//     e.preventDefault()
// })

//2. 영역클릭이 해제시
// moc.addEventListener('mouseup',function(e){
//     console.log('mouseup')
//     e.preventDefault()
// })

//3. 영역에 마우스가 있을때
// moc.addEventListener('mouseenter',function(e){
//     console.log('mouseenter')
//     e.preventDefault()
// })

//4. 영역에서 마우스가 나갈때
// moc.addEventListener('mouseleave',function(e){
//     console.log('mouseleave')
//     e.preventDefault()
// })

//5. 영역 좌표 확인하기
moc.addEventListener('mousedown',function(e){
    console.log('event.clientX',e.clientX)
    console.log('event.clientX',e.clientY)
    console.log('event.pageX',event.pageX)
    console.log('event.pageX',event.pageY)
})

// body.addEventListener('click',function(e){
//     e.preventDefault();
//     let div = document.createElement('div')
//     div.classList.add('circle')
//     div.style.left=event.pageX+'px';
//     div.style.top=event.pageY+'px';
//     body.appendChild(div)
// })