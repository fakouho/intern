let ul = document.querySelector('.list');
let before = document.querySelector('#before');
let after = document.querySelector('#after');
let ipt = document.querySelector('input');

function createButton(li) {
    let btn = document.createElement('button');
    btn.textContent = 'X';
    btn.classList.add('remove_btn');
    btn.addEventListener('click', function () {
        li.remove(); // 해당 li 항목 삭제
    });
    return btn;
}

before.addEventListener('click', function (e) {
    e.preventDefault();
    let li = document.createElement('li');
    li.textContent = ipt.value;
    ul.insertBefore(li, ul.firstChild);
    let btn = createButton(li);
    li.appendChild(btn);
    ipt.value = '';
});

after.addEventListener('click', function (e) {
    e.preventDefault();
    let li = document.createElement('li');
    li.textContent = ipt.value;
    ul.appendChild(li);
    let btn = createButton(li);
    li.appendChild(btn);
    ipt.value = '';
});
