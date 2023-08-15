console.log('hello');

const buttons = document.querySelectorAll('.row div');
const display = document.querySelector('.display');
let number1;
let operator;
let newNumber = true;

buttons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        executeOperation(this.textContent);
    })
    button.addEventListener('mouseover', function(event) {
        this.style.cssText = "background-color: lightsalmon";
    })
    button.addEventListener('mouseout', function(event) {
        this.style.cssText = "background-color: null";
    })
});

function executeOperation(input) {

    console.log(input);
    
    if(!isNaN(input)) {
        // Not not a number (it is a number)
        if(newNumber) {
            display.textContent = input;
            newNumber = false;
        } else {
            display.textContent += input;
        }
    } else if(input === '.') {
        if(newNumber) {
            display.textContent = input;
            newNumber = false;
        } else if (!display.textContent.includes('.')) {
            display.textContent += input;
        }
    } else if(input === '+' || input === '-' || input === 'x' || input === '÷') {
        if(!operator) {
            number1 = display.textContent;
        }
        operator = input;
        newNumber = true;
    } else if(input === '+/-' && display.textContent != 0) {
        let displayVal = new Number(display.textContent) * -1;
        display.textContent = displayVal;
    } else if(input === '%' && display.textContent != 0) {
        let displayVal = new Number(display.textContent) / 100;
        display.textContent = displayVal;
    } else if(input === 'AC') {
        display.textContent = 0;
        number1 = null;
        operator = null;
        newNumber = true;
    }  else if(input === '=' && number1 && operator) {
        display.textContent = operate(number1, display.textContent, operator);
        number1 = null;
        operator = null;
        newNumber = true;
    }
}

function operate(number1, number2, operator) {

    number1 = new Number(number1);
    number2 = new Number(number2);
    let result;

    switch(operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case 'x':
            result = number1 * number2;
            break;
        case '÷' :
            result = number1 / number2;
            break;
    }

    return Math.round(result * 100) / 100;



}