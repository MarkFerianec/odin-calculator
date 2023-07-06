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
let buttonToggled = false;  // may not be necessary

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

    // if (display.textContent > 0
    //     && display.textContent != 1
    //     && display.textContent != 11
    //     && display.textContent != 111) {
    //     firstNumber = 0;
    //     displayValue = '';
    //     display.textContent = '';
    //     // buttonToggled = false; //may not be neccessary?
    // } //This almost works too, it is getting closer.
    //This won't work because if a user calculates a 11 it appends a 1 to it making it 111 :(

    // if (display.textContent > 0) {      
    //     firstNumber = 0;
    //     displayValue = '';
    //     display.textContent = '';
    //     buttonToggled = false; //may not be neccessary?
    // }
    //THIS ALMOST WORKS! It just doesn't allow you to enter more than one 1.



    // if (buttonToggled == false) { //firstNumber > 0 && 
    //     firstNumber = 0;
    //     displayValue = '';
    //     display.textContent = '';
    // buttonToggled = false
    // }

    // else if (buttonToggled == false) {  //these 5 lins of code going down are experimental.
    //     // firstNumber = 0;
    //     displayValue = '';
    //     display.textContent = '';
    // }

    // display.textContent = '';

    // if (secondNumber == 0) {
    // firstNumber = 0;
    // displayValue = '';
    // display.textContent = '';
    // buttonToggled = false;
    // }

    // if (buttonToggled == true) { 
    //     displayValue = '';
    //     display.textContent = '';
    //     buttonToggled = false;
    // }

    // if (buttonToggled != true) {
    //     display.append(1);       
    //     displayValue += '1';
    //     buttonToggled = false; 
    // }

    // if (display.textContent = 200) {
    //     display.textContent = '';
    //     firstNumber = 0;
    // }

    // if (displayValue.length > 0) {
    // firstNumber = Number(displayValue);
    // firstNumber = 1;
    // display.textContent = '';
    // display.append(1);
    // displayValue += '1';
    // }

    // if (firstNumber > 0) {
    //     firstNumber = 0;
    //     firstNumber = display.textContent;
    //     display.textContent = '';
    // }

    // firstNumber = 1;
    //firstNumber = Number(display.textContent);
    // display.textContent = '';

    display.append(1);       //these 2 lines are important
    displayValue += '1';
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
});

//Operator functions

plus.addEventListener('click', add);
//added || firstNumber == 0 to this function if statement.
function add() {
    if (typeof (firstNumber) == 'undefined' || firstNumber == 0) {
        firstNumber = Number(displayValue);
        console.log("first number is " + firstNumber);
        operator = 'add';
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
    secondNumber = Number(displayValue);
    console.log("second number is " + secondNumber);
    console.log("total is " + (firstNumber + secondNumber));
    display.textContent = firstNumber + secondNumber;
    firstNumber = firstNumber + secondNumber;
    secondNumber = 0;
}

clear.addEventListener('click', clearDisplay);

function clearDisplay() {
    firstNumber = undefined;
    secondNumber = undefined;
    displayValue = '';
    display.textContent = '';

}