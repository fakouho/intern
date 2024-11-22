//get메서드 활용
let title= document.getElementById('title');
console.log(title);

let items=document.getElementsByClassName('item');
console.log(items[0]);

let liList=document.getElementsByTagName('li');
console.log(liList);

//dom 요소 쿼리
let h2=document.querySelector('#title');
console.log(h2);


//콘텐츠 수정하기
h2.textContent='아리';;
h2.innerHTML='<span>강아리</span>';

// 속성 제어하기
let input = document.querySelector('input');
console.log(input);
input.setAttribute('placeholder', '오늘은 금요일 입니다.');
input.removeAttribute('placeholder')

//콘텐츠 스타일링
/*
let p=document.querySelector('#ptag');
p.style.color='red';
*/
let p =document.getElementById('ptag');
// p.style.color='blue';
p.classList='dark';