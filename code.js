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

let str = 'test';
console.log(str.length);
console.log(str.toUpperCase());

let num = '12.543px';
//okruglenie
console.log(Math.round(num));
//uberaet lishnie znaki i ostavliaet 4islo
console.log(parseFloat(num));


