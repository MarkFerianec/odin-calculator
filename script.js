function addNumbers(a, b) {
    firstNumber = firstNumber + secondNumber;
    a = a + b;
    display.textContent = a;
}

function subtractNumbers(a, b) {
    firstNumber = firstNumber - secondNumber;
    a = a - b;
    display.textContent = a;

}

function multiplyNumbers(a, b) {
    firstNumber = firstNumber * secondNumber;
    a = a * b;
    display.textContent = a;
}

function divideNumbers(a, b) {
    if (b == 0) {
        display.textContent = 'Cannot divide by 0';
    }
    else {
        firstNumber = firstNumber / secondNumber;
        a = a / b;
        display.textContent = a;
    }
}

let firstNumber = 0;
let secondNumber = 0;
let operator;
let buttonToggled = false;  // may not be necessary
let newDisplay;
let buttonToggled2 = false;
let buttonToggled3 = false;

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

let displayValue = '';

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
    if (buttonToggled == true) {
        displayValue = '';
        display.textContent = '';
        buttonToggled = false;
    }

    if (display.textContent != displayValue) {
        firstNumber = 0;
        displayValue = '';
        display.textContent = '';
        // buttonToggled = false; //may not be neccessary line of code?
    } //display.textContent > 0 &&  // was in if statement between parantheses previously.
    // it may and probably is unnecessary.

    display.append(1);       //these 2 lines are important
    displayValue += '1';
    buttonToggled2 = true;
});

two.addEventListener('click', () => {
    if (buttonToggled == true) {
        displayValue = '';
        display.textContent = '';
        buttonToggled = false;
    }

    if (display.textContent != displayValue) {
        firstNumber = 0;
        displayValue = '';
        display.textContent = '';
        // buttonToggled = false; //may not be neccessary line of code?
    } //display.textContent > 0 &&  // was in if statement between parantheses previously.
    // it may and probably is unnecessary.

    display.append(2);
    displayValue += '2';
    buttonToggled2 = true;
});

three.addEventListener('click', () => {
    if (buttonToggled == true) {
        displayValue = '';
        display.textContent = '';
        buttonToggled = false;
    }

    if (display.textContent != displayValue) {
        firstNumber = 0;
        displayValue = '';
        display.textContent = '';
        // buttonToggled = false; //may not be neccessary line of code?
    } //display.textContent > 0 &&  // was in if statement between parantheses previously.
    // it may and probably is unnecessary.

    display.append(3);
    displayValue += '3';
    buttonToggled2 = true;
});

four.addEventListener('click', () => {
    if (buttonToggled == true) {
        displayValue = '';
        display.textContent = '';
        buttonToggled = false;
    }

    if (display.textContent != displayValue) {
        firstNumber = 0;
        displayValue = '';
        display.textContent = '';
        // buttonToggled = false; //may not be neccessary line of code?
    } //display.textContent > 0 &&  // was in if statement between parantheses previously.
    // it may and probably is unnecessary.

    display.append(4);
    displayValue += '4';
    buttonToggled2 = true;
});

five.addEventListener('click', () => {
    if (buttonToggled == true) {
        displayValue = '';
        display.textContent = '';
        buttonToggled = false;
    }

    if (display.textContent != displayValue) {
        firstNumber = 0;
        displayValue = '';
        display.textContent = '';
        // buttonToggled = false; //may not be neccessary line of code?
    } //display.textContent > 0 &&  // was in if statement between parantheses previously.
    // it may and probably is unnecessary.

    display.append(5);
    displayValue += '5';
    buttonToggled2 = true;
});

six.addEventListener('click', () => {
    if (buttonToggled == true) {
        displayValue = '';
        display.textContent = '';
        buttonToggled = false;
    }

    if (display.textContent != displayValue) {
        firstNumber = 0;
        displayValue = '';
        display.textContent = '';
        // buttonToggled = false; //may not be neccessary line of code?
    } //display.textContent > 0 &&  // was in if statement between parantheses previously.
    // it may and probably is unnecessary.

    display.append(6);
    displayValue += '6';
    buttonToggled2 = true;
});

seven.addEventListener('click', () => {
    if (buttonToggled == true) {
        displayValue = '';
        display.textContent = '';
        buttonToggled = false;
    }

    if (display.textContent != displayValue) {
        firstNumber = 0;
        displayValue = '';
        display.textContent = '';
        // buttonToggled = false; //may not be neccessary line of code?
    } //display.textContent > 0 &&  // was in if statement between parantheses previously.
    // it may and probably is unnecessary.

    display.append(7);
    displayValue += '7';
    buttonToggled2 = true;
});

eight.addEventListener('click', () => {
    if (buttonToggled == true) {
        displayValue = '';
        display.textContent = '';
        buttonToggled = false;
    }

    if (display.textContent != displayValue) {
        firstNumber = 0;
        displayValue = '';
        display.textContent = '';
        // buttonToggled = false; //may not be neccessary line of code?
    } //display.textContent > 0 &&  // was in if statement between parantheses previously.
    // it may and probably is unnecessary.

    display.append(8);
    displayValue += '8';
    buttonToggled2 = true;
});

nine.addEventListener('click', () => {
    if (buttonToggled == true) {
        displayValue = '';
        display.textContent = '';
        buttonToggled = false;
    }

    if (display.textContent != displayValue) {
        firstNumber = 0;
        displayValue = '';
        display.textContent = '';
        // buttonToggled = false; //may not be neccessary line of code?
    } //display.textContent > 0 &&  // was in if statement between parantheses previously.
    // it may and probably is unnecessary.

    display.append(9);
    displayValue += '9';
    buttonToggled2 = true;
});

zero.addEventListener('click', () => {
    if (buttonToggled == true) {
        displayValue = '';
        display.textContent = '';
        buttonToggled = false;
    }

    if (display.textContent != displayValue) {
        firstNumber = 0;
        displayValue = '';
        display.textContent = '';
        // buttonToggled = false; //may not be neccessary line of code?
    } //display.textContent > 0 &&  // was in if statement between parantheses previously.
    // it may and probably is unnecessary.

    display.append(0);
    displayValue += '0';
    buttonToggled2 = true;
});

//Operator functions

plus.addEventListener('click', add);
//added || firstNumber == 0 to this function if statement.
function add() {
    operator = 'add';
    if (typeof (firstNumber) == 'undefined' || firstNumber == 0) {
        firstNumber = Number(displayValue);
        console.log("first number is " + firstNumber);
        buttonToggled = true;
        buttonToggled2 = false;
        buttonToggled3 = false; //added
    }
    else {
        // firstNumber = firstNumber + secondNumber;
        buttonToggled = true;
        buttonToggled3 = false; //added
    }
    if (display.textContent != firstNumber) { //This is wrong because you cannot add identical numbers using add button // Edit. I made it work somehow.
        newDisplay = firstNumber + Number(display.textContent)
        console.log('newdisplay is ' + newDisplay);
        secondNumber = Number(displayValue);
        console.log('second number is ' + secondNumber);
        firstNumber = firstNumber + secondNumber;
        console.log('firstNumber is ' + firstNumber);
        display.textContent = newDisplay;
        buttonToggled = true; // may not be necessary
        buttonToggled2 = false;
        buttonToggled3 = false; //added
    }

    if (display.textContent == firstNumber && buttonToggled2 == true) {
        newDisplay = firstNumber + Number(display.textContent)
        console.log('newdisplay is ' + newDisplay);
        secondNumber = Number(displayValue);
        console.log('second number is ' + secondNumber);
        firstNumber = firstNumber + secondNumber;
        console.log('firstNumber is ' + firstNumber);
        display.textContent = newDisplay;
        buttonToggled = true; // may not be necessary
        buttonToggled2 = false;
        buttonToggled3 = false; //added
    }
}

minus.addEventListener('click', subtract);
function subtract() {
    operator = 'subtract';
    if (typeof (firstNumber) == 'undefined' || firstNumber == 0) {
        firstNumber = Number(displayValue);  //Maybe use display.textContent? //This code is bugged when display is 0.
        console.log("first number is " + firstNumber);
        buttonToggled = true;
        buttonToggled2 = false;
        buttonToggled3 = false; //added
    }
    else {
        buttonToggled = true;
        buttonToggled3 = false; //added
    }
    //experimental
    // if (firstNumber == 0 && display.textContent != 0 && buttonToggled2 == false) {
    //     firstNumber = -Number(display.textContent)
    //     console.log("first number is " + firstNumber);
    //     buttonToggled = true;
    //     buttonToggled2 = false;
    //     buttonToggled3 = false; //added
    // }
    // else {
    //     buttonToggled = true;
    //     buttonToggled3 = false; //added
    // }

    if (display.textContent != firstNumber) {
        newDisplay = firstNumber - Number(display.textContent)
        console.log('newdisplay is ' + newDisplay);
        secondNumber = Number(displayValue);
        console.log('second number is ' + secondNumber);
        firstNumber = firstNumber - secondNumber;
        console.log('firstNumber is ' + firstNumber);
        display.textContent = newDisplay;
        buttonToggled = true; // may not be necessary
        buttonToggled2 = false;
        buttonToggled3 = false; //added
    }

    if (display.textContent == firstNumber && buttonToggled2 == true) {
        newDisplay = firstNumber - Number(display.textContent)
        console.log('newdisplay is ' + newDisplay);
        secondNumber = Number(displayValue);
        console.log('second number is ' + secondNumber);
        firstNumber = firstNumber - secondNumber;
        console.log('firstNumber is ' + firstNumber);
        display.textContent = newDisplay;
        buttonToggled = true; // may not be necessary
        buttonToggled2 = false;
        buttonToggled3 = false; //added
    }
}

multiply.addEventListener('click', multiplication);
function multiplication() {
    operator = 'multiply';
    if (typeof (firstNumber) == 'undefined' || firstNumber == 0) {
        firstNumber = Number(displayValue);
        console.log("first number is " + firstNumber);
        buttonToggled = true;
        if (typeof (secondNumber) == 'number') {
            firstNumber = firstNumber + secondNumber;
        }
    }
    else {
        firstNumber = firstNumber + secondNumber;
        buttonToggled = true;
    }
}

divide.addEventListener('click', division);
function division() {
    operator = 'divide';
    if (typeof (firstNumber) == 'undefined' || firstNumber == 0) {
        firstNumber = Number(displayValue);
        console.log("first number is " + firstNumber);
        buttonToggled = true;
        if (typeof (secondNumber) == 'number') {
            firstNumber = firstNumber + secondNumber;
        }
    }
    else {
        firstNumber = firstNumber + secondNumber;
        buttonToggled = true;
    }
}

equals.addEventListener('click', compute);

function compute() {
    if (buttonToggled3 == false) {
        // secondNumber = Number(displayValue);
        secondNumber = Number(display.textContent);

        console.log("second number is " + secondNumber);

        operate(operator, firstNumber, secondNumber);

        secondNumber = 0;

        buttonToggled2 = false;

        buttonToggled3 = true;
    }
    else {
        console.log('do nothing');
    }
}

clear.addEventListener('click', clearDisplay);

function clearDisplay() {
    firstNumber = undefined;
    secondNumber = undefined;
    displayValue = '';
    display.textContent = '';

}