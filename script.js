// Lessons 20
/*
let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),
    wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'green';
btn[1].style.borderRadius = '100px';

// for (let i = 0; heart.length; i++) {
//     heart[i].style.backgroundColor = 'green';
// }

heart.forEach(function(item,i,hearts){
    item.style.backgroundColor = 'green';
})

let div = document.createElement('div'),
    text = document.createTextNode('Тут был я');

div.classList.add('black');

//document.body.appendChild(div); // Закидываем элемент в конец BODY
//wrapper.appendChild(div); // Закидываем элемент внутрь wrapper
document.body.insertBefore(div,circle[1]); //Вставляет элемент перед указанным обьектом (div - элемент, circle - перед чем вставляем)
wrapper.removeChild(heart[2]); // Удаляем єлемент
document.body.replaceChild(btn[1], circle[1]); //Замена одного элемента на другой
//div.innerHTML = '<h2>Hello World</h2>'; // Добавление текста или элемента в элемент - 1
div.textContent = 'Hello World'; // Добавление текста или элемента в элемент - 2
*/
//Lessons 21

let box = document.getElementById('box');

// box.onclick = function() {
//     alert('Мы кликнули на первый бокс');
// }; // При клике выводит сообщение

// box.addEventListener('click', function() {
//     alert('Мы кликнули на первый бокс');
//     alert('Мы кликнули на первый бокс повторно');
// });   // При клике операции выполняются поочерёдно

// box.addEventListener('mouseenter', function() {
//     alert('Мы навели мышь на первый бокс');  
//});   // При наведении на элемент
box.addEventListener('click', function(e) {
    let target = e.target; // присвоение нашему элементу переменую
    target.style.display = 'none'; //делаем блок невидимым
    console.log('Произошло событие ' + e.type + ' на элементе ' + e.target);
    //Произошло событие click на элементе [object HTMLDivElement]
})

let link = document.querySelector('a');

link.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('Произошло событие ' + e.type + ' на элементе ' + e.target);
});

let btn = document.querySelectorAll('button');

btn.forEach( function(item) {
    item.addEventListener('mouseleave', function(e){
        console.log('Мы убрали мышку с кнопок');
    })
}) // Функция когда нам надо работать с массивос обьектов