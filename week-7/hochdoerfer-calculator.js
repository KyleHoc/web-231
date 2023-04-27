//Title: hochdoerfer-calculator.js
//Author: Kyle Hochdoerfer
//Date: 4/25/23
//Description: JavaScript for hochdoerfer-calculator.html

//Declare a function for multiplying numbers
function multiply(num1, num2){
    //If num1 or num2 are not of the number data type
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        //Throw an error stating inputs must be numbers
        throw Error('inputs must be numbers');
      }

    //If num1 or num2 are not numbers
    if (isNaN(num1) || isNaN(num2)) {
        //Throw an error stating that inputs must be numbers
        throw Error('Input must be numbers');
      }
    //Return the value of num1 multiplied by num2
    return num1 * num2;
}

//Declare a function for displaying the multiplication results
function displayMultiplyResults(){
    //Declare variables to hold the user input numbers
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    //Parse num1 and num2 using parseFloat
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    //If no errors are found:
    try{
        //Set sum equal to num1 multiplied by num2
        const sum = multiply(num1, num2)

        //Display the results to the html document
        document.getElementById('mul-results').innerHTML = num1 + ' * ' + num2 + ' = ' + sum;
    } catch(err){
        //If an error occurs, display an alert
        alert(err)
    }
}

//Declare a function for dividing numbers
function divide(num3, num4){
    //If num3 or num4 are not of the number data type
    if (typeof num3 !== 'number' || typeof num4 !== 'number') {
        //Throw an error stating inputs must be numbers
        throw Error('Inputs must be numbers');
      }

    //If num3 or num4 are not numbers
    if (isNaN(num3) || isNaN(num4)) {
        //Throw an error stating that inputs must be numbers
        throw Error('Input must be numbers');
      }

    //If num3 or num4 are zero
    if (num3 == 0 || num4 == 0) {
        //Throw a divide by 0 error
        throw Error('cannot divide by zero');
      }
    
    //Return the value of num3 divided by num4
    return num3 / num4;
}

//Declare a function for displaying the division results
function displayDivideResults(){
    //Declare variables to hold the user input numbers
    let num3 = document.getElementById('num3').value;
    let num4 = document.getElementById('num4').value;

    //Parse num3 and num4 using parseFloat
    num3 = parseFloat(num3);
    num4 = parseFloat(num4);

    //If no errors are found:
    try{
        //Set sum equal to num3 divided by num4
        const sum = divide(num3, num4)

        //Display the results to the html document
        document.getElementById('div-results').innerHTML = num3 + ' / ' + num4 + ' = ' + sum;
    } catch(err){
        //If an error occurs, display an alert
        alert(err)
    }
}