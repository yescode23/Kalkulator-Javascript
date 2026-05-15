const display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear');
const equalsButton = document.querySelector('.equals');

let firstNumber = '';
let secondNumber = '';
let operator = '';
let result = '';

numberButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        const number = button.innerText;
        if (display.innerText === '0') {
            display.innerText = number;
        } else {
            display.innerText += number;
        }
    })
});

operatorButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        firstNumber = display.innerText;
        operator = button.innerText;
        display.innerText = '0';
    });
});

equalsButton.addEventListener('click', function() {
    secondNumber = display.innerText;

    if (operator === '+') {
        let plus = Number(firstNumber) + Number(secondNumber);
        result = plus;
        display.innerText = result;
    }
    
    if (operator === '-') {
        let plus = Number(firstNumber) - Number(secondNumber);
        result = plus;
        display.innerText = result;
    }

    if (operator === '/') {
        let plus = Number(firstNumber) / Number(secondNumber);
        result = plus;
        display.innerText = result;
    }

    if (operator === 'x') {
        let plus = Number(firstNumber) * Number(secondNumber);
        result = plus;
        display.innerText = result;
    }
});

clearButton.addEventListener('click', function() {
    display.innerText = '0';
});