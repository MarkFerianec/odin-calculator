function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let firstNumber;
let secondNumber;
let operator;

function operate(operator, firstNumber, secondNumber) {

    switch (operator) {
        case 'add':
            return add(firstNumber, secondNumber)
        case 'subtract':
            return subtract(firstNumber, secondNumber)
        case 'multiply':
            return multiply(firstNumber, secondNumber)
        case 'divide':
            return divide(firstNumber, secondNumber)
    }
}

