'use strict';

document.addEventListener('DOMContentLoaded', function() {
    let budget, date,
        appData = {
            budget: 0,
            date: 0,
            expenses: {},
            optionalExpenses: {},
            income: [],
            savings: false
        },
        buttonStart = document.getElementById('start'), //Получить кнопку "Начать расчет" через id

        budgetVal = document.querySelector('.budget-value'), //Получить все блоки в правой части программы через классы (которые имеют класс название-value
        daybudgetVal = document.querySelector('.daybudget-value'),
        levelVal = document.querySelector('.level-value'),
        expensesVal = document.querySelector('.expenses-value'),
        optionalExpensesVal = document.querySelector('.optionalexpenses-value'),
        incomeVal = document.querySelector('.income-value'),
        monthSavingsVal = document.querySelector('.monthsavings-value'),
        yearSavingsVal = document.querySelector('.yearsavings-value'),

        data = document.querySelector('.data'), // Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной.
        expensesBtn = data.querySelectorAll('button')[0],
        optExpensesBtn = data.querySelectorAll('button')[1],
        countBtn = data.querySelectorAll('button')[2],

        expensesItems = document.querySelectorAll('.expenses-item'), //Получить поля(input) c обязательными расходами через класс
        optExpensesItems = document.querySelectorAll('.optionalexpenses-item'), //Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll

        chooseIncome = document.querySelector('.choose-income'), // Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)
        checkbox = document.querySelector('#savings'),
        sumVal = document.querySelector('#sum'),
        percentVal = document.querySelector('#percent'),
        year = document.querySelector('.year-value'),
        month = document.querySelector('.month-value'),
        day = document.querySelector('.day-value');


    expensesBtn.disabled = true;
    optExpensesBtn.disabled = true;
    countBtn.disabled = true;

    buttonStart.addEventListener('click', function() {
        date = new Date(prompt('Введите дату в формате YYYY-MM-DD', 'YYYY-MM-DD'));
        budget = +prompt('Ваш бюджет на месяц?', '');

        while (isNaN(budget) || budget == '' || budget == null) {
            budget = +prompt('Ваш бюджет на месяц?', '');
        }
        appData.budget = budget;
        appData.date = date;
        budgetVal.textContent = budget.toFixed();
        day.value = date.getDate();
        month.value = date.getMonth() + 1;
        year.value = date.getFullYear();
        expensesBtn.disabled = false;
        optExpensesBtn.disabled = false;
        countBtn.disabled = false;
    });
    console.log(appData);


    expensesBtn.addEventListener('click', function () {
       let sum = 0;

       for (let i = 0; i < expensesItems.length; i++) {
           let expensesItem =  expensesItems[i].value,
               expensesCost =  +expensesItems[++i].value;
           appData.expenses[expensesItem] = expensesCost;
           sum += expensesCost;
           expensesVal.textContent = sum;

       }
        console.log(appData);
    });

    optExpensesBtn.addEventListener('click', function() {
        for (let i = 0; i < optExpensesItems.length; i++) {
            let optExpense = optExpensesItems[i].value;
            appData.optionalExpenses[i+1] = optExpense;
            optionalExpensesVal.textContent += appData.optionalExpenses[i+1] + ' ';
        }
    });

    countBtn.addEventListener('click', function() {
        if (appData.budget != undefined) {
            let expensesSum = +expensesVal.textContent,
                budgetPerDay = (appData.budget - expensesSum) / 30;
            daybudgetVal.textContent = budgetPerDay.toFixed(2);
            if (budgetPerDay < 100) {
                levelVal.textContent = 'Минимальный уровень достатка';
            } else if (budgetPerDay > 100 && budgetPerDay < 2000) {
                levelVal.textContent = 'Средний уровень достатка';
            } else if (budgetPerDay > 2000) {
                levelVal.textContent = 'Высокий уровень достатка';
            } else {
                levelVal.textContent = 'Что-то пошло не так';
            }
        } else {
            daybudgetVal.textContent = 'Необходимо ввести сумму бюджета';
        }
    });

    chooseIncome.addEventListener('input', function() {
        let items = chooseIncome.value;
        appData.income = items.split(',');
        incomeVal.textContent = appData.income;
        console.log(appData);
    });

    checkbox.addEventListener('click', function() {
       if (appData.savings) {
           appData.savings = false;
       } else {
           appData.savings = true;
       }
        console.log(appData.savings);
    });

    sumVal.addEventListener('input', function() {
       if (appData.savings) {
            let sum = +sumVal.value,
                percent = +percentVal.value;
            appData.monthIncome = sum / 100 / 12 * percent;
            appData.yearIncome = sum / 100 * percent;

           monthSavingsVal.textContent = appData.monthIncome.toFixed(1);
           yearSavingsVal.textContent = appData.yearIncome.toFixed(1);
       }
    });

    percentVal.addEventListener('input', function() {
       if (appData.savings) {
           let sum = +sumVal.value,
               percent = +percentVal.value;
           appData.monthIncome = sum / 100 / 12 * percent;
           appData.yearIncome = sum / 100 * percent;

           monthSavingsVal.textContent = appData.monthIncome.toFixed(1);
           yearSavingsVal.textContent = appData.yearIncome.toFixed(1);
       }
    });

    // Здесь я пыталась сделать доп пункт 1, но у меня не получилось, чтоб некорректный символ стирался

    // for (let i = 0; i < optExpensesItems.length; i++) {
    //     optExpensesItems[i].addEventListener('input', function (e) {
    //         let x;
    //         for (let j = 0, len = this.value.length; j < len; j++) {
    //             x = this.value.charCodeAt(j);
    //             console.log(x);
    //             if (x < 122) {
    //                 alert("Некорректный ввод");
    //                 this.value.replace(this.value[j], '');
    //             }
    //         }


            // let reg = /[а-яё]/i;
            // if (reg.test(this.value) == false) {
            //     e.preventDefault();
            //     alert("Введите русские символы");
            //     return false;
            // }
        // });
    // }
});








