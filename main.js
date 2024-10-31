// //  Task 1: Create the basic functions in this case create functions to Add variables together
// addition = (num1, num2) => num1 + num2; 
// // task a: Multiplication
// multiplication = (num1, num2) => num1 * num2; 
// // Task b: Subtraction
// subtraction = (num1, num2) => num1 - num2; 
// // Task c: Division
// division = (num1, num2) => num1/num2; 

// // Task 2: Create three three variables for each part of the operation

// // var firstNumber = Number(prompt('First number is?: ')); 
// // var operator = prompt('+, -, *, / ?: ');
// // var secondNumber = Number(prompt('Second number is?: '));

// // Task 3: Create an operate function that takes an operator and 2 numbers and hen calls one of the above functions 


// function operate(x, y, operator) {

//     if (operator === '+') {
//          return console.log(addition(x, y))
//     }
//     else if (operator === '-') {
//         return console.log(subtraction(x, y))
//     }
//     else if (operator === '*') {
//         return console.log(multiplication(x, y))
//         // return outcome
//     }
//     else if (operator === '/') {
//         return console.log(division(x, y))
//         // return outcome
//     } 
//     return console.log('NaN')
// } 

// // Calling above function...this operator works with given values/inputs
// // operate(firstNumber, secondNumber, operator)

// // Task 5: Create the functions that populate the display 
// // a) create the event listener for numbers to be pressed 
// let numbers = document.querySelectorAll('.digits');
// let operators = document.querySelectorAll('.operators');
// let clear = document.querySelector('.clear').addEventListener("click", () => { console.clear()
//     screen.innerHTML = " "});        // Can now revert back to empty space when pressing clear button   
// let equal = document.querySelector('.equal');
// let screen = document.getElementById('calc-screen')

// // Number of click returned now in the console...however logged separetly not together
// numbers.forEach(number => {
//     outcome = number.addEventListener('click', () => {
//         console.log(number.textContent)
//         screen.innerHTML += `${number.textContent}`
//     });
                                                        
// }); 

// operators.forEach(getOp => {
//     outcome = getOp.addEventListener('click', () => {
//         console.log(getOp.textContent)
//         screen.innerHTML += `${getOp.textContent}`
//     });
// }); 

// let firstNumber = 0
// let secondNumbern = 0


// //  Task 5: As the numbers are typed the numbers are displayed on the screen 
// // This task is done, need to store the numbers that ar typed now 

// Cleaned code

// Basic Operations
addition = (num1, num2) => num1 + num2; 
multiplication = (num1, num2) => num1 * num2; 
subtraction = (num1, num2) => num1 - num2; 
division = (num1, num2) => num2 !== 0 ? num1 / num2 : 'Error'; // Handle division by zero

// Operate function
function operate(x, y, operator) {
    if (operator === '+') return addition(x, y);
    else if (operator === '-') return subtraction(x, y);
    else if (operator === '*') return multiplication(x, y);
    else if (operator === '/') return division(x, y);
    return 'Invalid Operation';
}

// Set up variables for display, numbers, and operations
let firstNumber = '';
let secondNumber = '';
let currentOperator = '';
let resultDisplayed = false;

let screen = document.getElementById('calc-screen');
let numbers = document.querySelectorAll('.digits');
let operators = document.querySelectorAll('.operators');
let clear = document.querySelector('.clear').addEventListener("click", clearDisplay);
let equal = document.querySelector('.equals').addEventListener("click", evaluateResult);

// Function to clear display and reset values
function clearDisplay() {
    screen.innerHTML = '';
    firstNumber = '';
    secondNumber = '';
    currentOperator = '';
    resultDisplayed = false;
}

// Display numbers on the screen when clicked
numbers.forEach(number => {
    number.addEventListener('click', () => {
        if (resultDisplayed && !currentOperator) { // Clear screen if result is displayed and no operator was pressed
            clearDisplay();
            resultDisplayed = false;
        }
        screen.innerHTML += number.textContent;
        if (!currentOperator) {
            firstNumber += number.textContent;
        } else {
            secondNumber += number.textContent;
        }
    });
});

// Store operator and display it
operators.forEach(operator => {
    operator.addEventListener('click', () => {
        if (firstNumber && !secondNumber && !resultDisplayed) {
            // First number is entered and an operator hasn't been used yet in this calculation
            screen.innerHTML += ` ${operator.textContent} `;
            currentOperator = operator.textContent;
        } else if (firstNumber && secondNumber && currentOperator) {
            // If there's a result displayed from a previous calculation, use it as the new first number
            evaluateResult();
            screen.innerHTML += ` ${operator.textContent} `;
            currentOperator = operator.textContent;
            secondNumber = ''; // Reset second number for the new operation
        }
    });
});

// Evaluate result and display it
function evaluateResult() {
    if (firstNumber && secondNumber && currentOperator) {
        let x = parseFloat(firstNumber);
        let y = parseFloat(secondNumber);
        let result = operate(x, y, currentOperator);
        
        screen.innerHTML = result;
        firstNumber = result.toString(); // Store result as firstNumber for potential new calculation
        secondNumber = '';
        currentOperator = '';
        resultDisplayed = true;
    }
}