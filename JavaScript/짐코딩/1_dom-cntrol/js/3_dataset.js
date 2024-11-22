let h2 = document.querySelector('h2');
console.log(h2.dataset.test);
h2.dataset.test = 'korea';
console.log(h2.dataset.test);

let li = document.querySelectorAll('li');
let h3 = document.querySelector('.food_table');
let img = document.querySelector('img');


function food(e) {
    e.preventDefault(); 
    img.setAttribute('src', e.target.dataset.img); 
    console.log(e.target); 
    h3.textContent = e.target.textContent; 
}

for (let i = 0; i < li.length; i++) {
    li[i].addEventListener('click', food);
}
