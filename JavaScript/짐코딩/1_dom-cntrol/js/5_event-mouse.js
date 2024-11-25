let moc = document.querySelector('.rectang')
let body = document.querySelector('body')

// moc.addEventListener('mousedown',function(e){
//     console.log('mousedown')
//     e.preventDefault()
// })
// moc.addEventListener('mouseup',function(e){
//     console.log('mouseup')
//     e.preventDefault()
// })

// moc.addEventListener('mouseenter',function(e){
//     console.log('mouseenter')
//     e.preventDefault()
// })
// moc.addEventListener('mouseleave',function(e){
//     console.log('mouseleave')
//     e.preventDefault()
// })
moc.addEventListener('mousedown',function(){
    console.log('event.clientX',event.clientX)
    console.log('event.clientX',event.clientY)
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