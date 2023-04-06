//Title: hochdoerfer-temp-conversion.js
//Author: Kyle Hochdoerfer
//Date: 4/3/23
//Description: JavaScript for hochdoerfer-number-game.html

//Generate random number
const rnd = Math.floor(Math.random() * 10) + 1;

//Declare a function to check the user's guess
function chkGuess(){
    //Declare a variable to hold the user's inputted guess
    const guess = document.getElementById('guess').value;

    //Declare variables to state whether the guess was too high, low or correct
    const msgGreaterThan = "The number is greater than";
    const msgLessThan = "The number is less than";
    const msgCongrats = "Congratulations! you picked the correct number!";

    //Based on the value of the random number:
    if (rnd < guess){
        //Output a message to the document stating that the guess was too low
        document.getElementById("results").innerHTML = msgLessThan + " " + guess;
    } else if (rnd > guess){
        //Output a message to the document stating that the guess was too high
        document.getElementById("results").innerHTML = msgGreaterThan + " " + guess;
    } else {
        //Output a message to the document stating that the guess was correct
        document.getElementById("results").innerHTML = msgCongrats;
    }
}