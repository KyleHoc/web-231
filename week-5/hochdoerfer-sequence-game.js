//Title: hochdoerfer-sequence-game.js
//Author: Kyle Hochdoerfer
//Date: 4/10/23
//Description: JavaScript for hochdoerfer-sequence-game.html

//Declare a function to display the chosen sequence
function displaySequence(){
    //Declare a constant containing the user selection
    const choice = document.getElementById('choice').value;

    //Based on the user's choice, build a string to display the chosen sequence
    switch(choice){
        //For the "numbers" case:
        case "numbers":
            //Declare an index and a string to hold the sequence
            let index = 0;
            let txtNumSequence = "";

            //While index is less than 11
            while(index < 11){
                //Concatenate index to the string with a comma and increment index
                txtNumSequence += index;
                index++;

                //If index is less than 10
                if (index < 11){
                    //Concatenate a comma and space to the string
                    txtNumSequence += ", "
                }
            }

            //Set the results element to display the sequence
            document.getElementById("results").innerHTML = txtNumSequence;
            break;

        //For the "even" case:
        case "even":
            //Declare an index and a string to hold the sequence
            let evenNumber = 0;
            let txtEvenSequence = "";

            //While evenNumber is less than 21
            do {
                //Add index to the string with a comma and increment index by 2
                txtEvenSequence += evenNumber;
                evenNumber += 2;

                //If index is less than 21
                if (evenNumber < 21){
                    //Concatenate a comma and space to the string
                    txtEvenSequence += ", "
                }
            } while(evenNumber < 21)

            //Set the results element to display the sequence
            document.getElementById("results").innerHTML = txtEvenSequence;
            break;

        //For the "odd" case:
        case "odd":
            //Declare a string to hold the sequence
            txtOddSequence = "";

            //For odd numbers less than 20
            for (let i = 1; i < 20; i += 2) {
                //Add the odd number to the sequence and increment by two
                txtOddSequence += i;

                //If index is less than 21
                if (i < 19){
                    //Concatenate a comma and space to the string
                    txtOddSequence += ", "
                }
              }

            //Set the results element to display the sequence
            document.getElementById("results").innerHTML = txtOddSequence;
            break;
            
        //For the default case
        default:
            //Display an alert asking the user to try again
            alert("Invalid selection, please try again!");
    }
}