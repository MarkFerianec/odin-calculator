function addNumbers(a, b) {
    return a + b;
}

function subtractNumbers(a, b) {
    return a - b;
}

function multiplyNumbers(a, b) {
    return a * b;
}

function divideNumbers(a, b) {
    return a / b;
}

let firstNumber;
let secondNumber;
let operator;

function operate(operator, firstNumber, secondNumber) {

    switch (operator) {
        case 'add':
            return addNumbers(firstNumber, secondNumber)
        case 'subtract':
            return subtractNumbers(firstNumber, secondNumber)
        case 'multiply':
            return multiplyNumbers(firstNumber, secondNumber)
        case 'divide':
            return divideNumbers(firstNumber, secondNumber)
    }
}

const display = document.querySelector('.display');

let displayValue = 0;

const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');
const decimal = document.querySelector('.decimal');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');

one.addEventListener('click', () => {
    display.append(1);
    displayValue += '1';
});

two.addEventListener('click', () => {
    display.append(2);
    displayValue += '2';
});

three.addEventListener('click', () => {
    display.append(3);
    displayValue += '3';
});

four.addEventListener('click', () => {
    display.append(4);
    displayValue += '4';
});

five.addEventListener('click', () => {
    display.append(5);
    displayValue += '5';
});

six.addEventListener('click', () => {
    display.append(6);
    displayValue += '6';
});

seven.addEventListener('click', () => {
    display.append(7);
    displayValue += '7';
});

eight.addEventListener('click', () => {
    display.append(8);
    displayValue += '8';
});

nine.addEventListener('click', () => {
    display.append(9);
    displayValue += '9';
});

zero.addEventListener('click', () => {
    display.append(0);
    displayValue += '0';
});







