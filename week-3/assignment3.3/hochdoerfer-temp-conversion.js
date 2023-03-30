//Create a function to convert fahrenheit to celsius
function calcCelsius() {
    //Store the user input for fahrenheit and convert it to celsius
    const fahrenheit = document.getElementById("temperature").value;
    const celsius = (fahrenheit - 32) / 1.8;

    //Display the result of the calculation
    document.getElementById("calc-results").innerHTML = celsius.toFixed(2);
}