'use strict';

/*
var number = 5;
var string = "Hello";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

console.log(4/0);
console.log('string' *9);

let persone = {
    name: "Jone",
    age: 25,
    isMarried: false

};

console.log(persone['name']);

let arr = ['plun.png', 'orange.jpg', 'apple.bmp'];

console.log(arr[1]);


//  let answer = +prompt("Есть ли Вам 18?" , "Да");

// console.log(typeof(answer));

// console.log("arr" + " - object");
// console.log(4 + +" - object");

let incr = 10, 
    decr = 10;



console.log(++incr, --decr);

console.log("2" === 2);

let isCheked = true,
    isClose = false;

console.log(isCheked || isClose); 

*/

// Zadanie 1

/*
let money = prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a2 = prompt("Во сколько обойдется?", ''),
	a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a4 = prompt("Во сколько обойдется?", '');

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(appData.budget / 30);

*/

/*
let num = 50;

if (num < 49) {
    colsole.log('No')
} else if (num > 100) {
    console.log('Mnogo')
} else {
    console.log('Yes')
}

switch (num) {
    case num < 49:
        console.log('Ne verno');
        break;
    case num > 100:
        console.log('Vse eshe ne verno');
            break; 
    case num > 100:
        console.log('Vse eshe ne verno');
            break; 
    case 50:
        console.log('Verno');
            break;                
}
*/

// let num = 50;
// while (num < 55) {
//     console.log(num);
//     num++;
// }

// for (let i = 1; i < 8; i++) {
//     if (i == 2) {
//         continue;
//     }
//     if (i == 6) {
//         break;
//     }
//     console.log(i);
// }

 //console.log(!!( a && b ));

//let y = 1; let x = y = 2; alert(x);

// alert( +"Infinity" );

// функции
// калькулятор 1-й вариант
// function calc(a,b) {
//     alert(a + b);
// }
// второй вариант стрелочная функция
// let calc = (a,b) => {
//     alert(a + b);
// }
// calc( +prompt("Введите первое число", ''),+prompt("Введите второе число", ''));

/*
let str = 'test';
console.log(str.length);
console.log(str.toUpperCase());

let num = '12.543px';
//okruglenie
console.log(Math.round(num));
//uberaet lishnie znaki i ostavliaet 4islo
console.log(parseFloat(num));
*/

//callback functions
/*
function first() {
    setTimeout( function() {
        console.log(1);
    } , 500 );
}
function second() {
    console.log(2);
}
first();
second();

function learnJS(lang, callback) {
    console.log('Я учу ' + lang);
    callback();
}
function done() {
    console.log('Это уже мой третий урок');
}
learnJS('JavaScript', done)
*/

//Обьекты
/*
let options = {
    width: 1024,
    heigth: 1024,
    name: 'test'
};
options.bool = false;
options.color = {
    border: 'black',
    bg: 'red'
};
delete options.bool;
console.log(options);

for (let key in options) {
    console.log('Свойство ' + key + ' Имеет значение ' + options[key]);
}
// Koli4estvo svoistv v obekte
console.log(Object.keys(options).length);
*/

// Массивы и псевдомассивы

//let arr = [1, 2, 3, 4, 5];

// for ( let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// arr.forEach(function(item, i, mass) {
//     console.log(i + ': ' + item + ' массив: ' + mass);
// });
//arr.pop(); // uberaet poslediy element
//arr.push('5'); //dobavlyaet posledniy element
//arr.shift(); // uberaet perviy element
//arr.unshift('1'); //dobavlyaet perviy element
// console.log(arr); 

// let mass = [1,4,2,5,3,2];
// for(let key of mass) {
//     console.log(key);
// }

//Помещаем значение в массив
// let ans = prompt('Введите обьекты через запятую',''),
//     arr = [];

// arr = ans.split(',');
// console.log(arr);    
// let arr = ['dfe','d3eww', 'dfssd', 'eww'],
//     i = arr.join(',');

// console.log(i); 

//Сортировка по алфавиту   
// let arr = [1,15,6,22,7,9,33],
//     i = arr.sort(compareNum);
// function compareNum(a,b) {
//     return a-b;
// }

// console.log(i);  

//OOP
// let soldier = {
//     health: 400,
//     armor: 100
// };

// let john = {
//     health: 100
// };
// john.__proto__ = soldier;

// console.log(john);
// console.log(john.armor);

//Типы данных, динамическая типизация

// 3,4,5
// 'string';
// true / false;
// let a;
// console.log(a);
// // Обьект
// let obj = {
//     name: 'John'
// };
// console.log(obj);
// //Массив
// let arr = [1,2,3,1,2]
// console.log(arr);

//Превращение типов данных в др.

//string
//1)
//console.log(typeof(String(null)));
//2)
//console.log('der'+ 3);

//number
//1) 
// console.log(typeof(Number(null)));
// //2)
// console.log(typeof(+'32'));
// //3)
// //console.log(typeof(parseInt('15px', 10))); 
// let answ = +prompt('Hello World?', '');

// //true / false
// // 0,'',null,undefined,Nan - FALSE
// //1)
// let switcher = '';
// if(switcher) {
//     console.log('Vse Good');
// } else {
//     console.log('Null srabotal');
// }

// switcher = 1;
// if(switcher) {
//     console.log('Vse Good');
// } else {
//     console.log('Null srabotal');
// }
// //2)
// console.log(typeof(Boolean(null)));
// //3)
// console.log(typeof(!!null));
