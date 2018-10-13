document.addEventListener('DOMContentLoaded', function() {
    let buttonStart = document.getElementById('start'), //Получить кнопку "Начать расчет" через id

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

        expenseItems = document.getElementsByClassName('expenses-item'), //Получить поля(input) c обязательными расходами через класс
        optExpensesItems = document.querySelectorAll('.optionalexpenses-item'), //Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll

        chooseIncome = document.querySelector('.choose-income'), // Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)
        checkbox = document.querySelector('#savings'),
        sum = document.querySelector('#sum'),
        percent = document.querySelector('#percent'),
        year = document.querySelector('.year-value'),
        month = document.querySelector('.month-value'),
        day = document.querySelector('.day-value');

    console.log(expensesBtn);
});








