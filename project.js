// Zadanie 1
let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    
    while(isNaN(money) || money == '' || money == null  ) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}

start();

   

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = +prompt("Во сколько обойдется?", '');
        if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
        && a != '' && b != '' && a.length < 50 ) {
            console.log('done');
            appData.expenses[a] = b; 
        } else {
            alert('Не верный результат, введите информацию заново');
            //console.log ("bad result");
            i--;
        }       
    }    
}

chooseExpenses();
 

function detectDayBudget() {
    appData.monetPerDay = (appData.budget / 30).toFixed();

    alert('Ежедневный бюджет:' + appData.monetPerDay);
}

detectDayBudget();

function detectLevel() {
    if(appData.monetPerDay < 100) {
        console.log('Минимальный уровень достатка');
    } else if(appData.monetPerDay > 100 && appData.monetPerDay < 2000) {
        console.log('Средний уровень достатка');
    } else if(appData.monetPerDay > 2000 ) {
        console.log('Хороший уровень достатка') 
    } else {
        console.log('Что-то пошло не так');
    }
}

function checkSaving() {
    if (appData.savings == true) {
        let save = +prompt('Какая сумма накоплений?'),
            percent = +prompt('Под какой процент');

        appData.monthIncore = save /100/12*percent;
        alert('Доход с Ваше депозита ' + appData.monthIncore + ' в месяц');
    }
}

checkSaving();

function chooseOptExpenses() {                             // Функция для определения необязательных расходов

    for (let i = 1; i <= 3; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }
}
chooseOptExpenses();