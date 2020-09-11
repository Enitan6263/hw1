'use strict'

let money = +prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');

let expenses1 = +prompt('Введите обязательную статью расходов в этом месяце');
let expenses2 = +prompt('Во сколько обойдется?');

let appData = {
    бюджет: money,
    timeData: time,
    expenses: {
        expenses1: expenses1,
        expenses2: expenses2
    },
    optionalExptnses: {

    },
    income: [],
    savings: false
};

alert((money - expenses2) / 30);