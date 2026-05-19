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
        if (number === '.' && display.innerText.includes('.')) {
            return;
        }
        
        if (display.innerText === '0') {
            display.innerText = number;
        }
        else {
            display.innerText += number;
        }
    })
});

operatorButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        if (operator !== '') {
            secondNumber = display.innerText;
            calculate();
            firstNumber = result;
        } else {
            firstNumber = display.innerText;
        }
        operator = button.innerText;
        display.innerText = '0';
    });
});

equalsButton.addEventListener('click', function() {
    secondNumber = display.innerText;
    calculate();
    display.innerText = result;
    firstNumber = result;
    operator = '';
});

clearButton.addEventListener('click', function() {
    display.innerText = '0';

    firstNumber = '';
    secondNumber = '';
    operator = '';
    result = '';
});

function calculate() {
    if (operator === '+') {
        result = Number(firstNumber) + Number(secondNumber);
    }
    
    if (operator === '-') {
        result = Number(firstNumber) - Number(secondNumber);
    }

    if (operator === '/') {
        result = Number(firstNumber) / Number(secondNumber);
    }

    if (operator === 'x') {
        result = Number(firstNumber) * Number(secondNumber);
    }
}