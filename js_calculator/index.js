// function to perform simple arithmetic operations

// take the operator input
const operator = prompt('Welcome!!! please enter an operator sign: \n\n" + " :  Addition.\n " - " :   Subtraction.\n " * " :   Multiplication.\n " / " :   Division.');

// take the operand input
const number1 = parseFloat(prompt('First number: '));
const number2 = parseFloat(prompt('Second number: '));

let result = 0
let displayCalculations = ""
const calculations = (number1, number2) => {
    result = number1 + number2;
    // using if...else if... else
    if (operator == '+') {
        result = number1 + number2;
        return result
    }
    else if (operator == '-') {
        result = number1 - number2;
    }
    else if (operator == '*') {
        result = number1 * number2; 
    }
    else if ( operator == '/' ) {
        result = number1 / number2;
    }
    else{
      print('Enter the right Operator')
    }

  }
  displayCalculations = `The Result of ${number1} ${operator} ${number2} is : ${result} `
  
  alert(displayCalculations);
  
//Displaying the result

