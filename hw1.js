'use strict'

let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExptnses: {},
    income: [],
    savings: true,
    chooseExpenses: function () { //создание методов в объкте
        for (let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце', '');
            let b = prompt('Во сколько обойдется?', '');

            if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null &&
                a != '' && b != '' && a.length < 50) {
                console.log('done');
                appData.expenses[a] = b;
            } else {
                console.log('Плохой результат');
                i--;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert('Ежедневный бюджет: ' + appData.moneyPerDay + 'руб.');
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка')
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?'),
                percent = +prompt('Под какой процент?');

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i <= 3; i++) {
            let questionOptExpenses = prompt('Статья необязательных расходов?');

            if (typeof (questionOptExpenses) === 'string' &&
                typeof (questionOptExpenses) != null &&
                questionOptExpenses.length < 50) {
                console.log('done');
                appData.optionalExptnses[i] = questionOptExpenses;
            } else {
                console.log('Плохой результат');
                i--;
            }
        }
    },
    chooseIncome: function () {
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');

        if (typeof (items) === 'string' &&
            typeof (items) != null && (items) != '') {

            appData.income = items.split(', ');
            appData.income.push(prompt('Ничего не забыли?'));
            appData.income.sort();
            appData.income.forEach(function (item, i) {
                alert('Cпособы доп. заработка: ' + (i + 1) + ' - ' + item);
            });
        } else {
            console.log('Плохой результат');
        }
    }
};

for (let key in appData) {
    console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
}

/* let i = 0;
while (i < 2) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', '');
    let b = prompt('Во сколько обойдется?', '');

    if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null &&
        a != '' && b != '' && a.length < 50) {
        console.log('done');
        appData.expenses[a] = b;
    } else {
        console.log('Плохой результат');
        i--;
    }
    i++;
};

let i = 0;
do {
    let a = prompt('Введите обязательную статью расходов в этом месяце', '');
    let b = prompt('Во сколько обойдется?', '');
    

    if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null &&
        a != '' && b != '' && a.length < 50) {
        console.log('done');
        appData.expenses[a] = b;
    } else {
        console.log('Плохой результат');
        i--;
    }
    i++;
}
while (i < 2); */