//  Task 1: Create the basic functions in this case create functions to Add variables together
addition = (num1, num2) => num1 + num2; 
// task a: Multiplication
multiplication = (num1, num2) => num1 * num2; 
// Task b: Subtraction
subtraction = (num1, num2) => num1 - num2; 
// Task c: Division
division = (num1, num2) => num1/num2; 

// Task 2: Create three three variables for each part of the operation

var firstNumber = Number(prompt('First number is?: ')); 
var operator = prompt('+, -, *, / ?: ');
var secondNumber = Number(prompt('Second number is?: '));

// Task 3: Create an operate function that takes an operator and 2 numbers and hen calls one of the above functions 


function operate(x, y, operator) {

    if (operator === '+') {
         return console.log(addition(x, y))
    }
    else if (operator === '-') {
        return console.log(subtraction(x, y))
    }
    else if (operator === '*') {
        return console.log(multiplication(x, y))
        // return outcome
    }
    else if (operator === '/') {
        return console.log(division(x, y))
        // return outcome
    } 
    else 
    {return 'NaN'}
} 

// Calling above function...this operator works with given values/inputs
// operate(firstNumber, secondNumber, operator)

// Task 5: Create the functions that populate the display 
// a) create the event listener for numbers to be pressed 
let numbers = document.querySelectorAll('.digits');
let operators = document.querySelectorAll('.operators');
let clear = document.querySelector('.clear').addEventListener("click", () => console.log(" "));
let equal = document.querySelector('.equal');

// Number of click returned now!
numbers.forEach(number => {
    outcome = number.addEventListener('click', () => console.log(number.textContent));
}); 

operators.forEach(getOp => {
    outcome = getOp.addEventListener('click', () => console.log(getOp.textContent));
}); 


// numbers.addEventListener('click', function(e){
//     for (number of numbers) {
//         if (numbers.values() === 1) {
//             return 1
//         }
//     }
// });

