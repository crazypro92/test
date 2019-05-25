'use strict';


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

console.log(arr[1])


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
