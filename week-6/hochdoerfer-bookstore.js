//Title: hochdoerfer-bookstore.js
//Author: Kyle Hochdoerfer
//Date: 4/17/23
//Description: JavaScript for hochdoerfer-bookstore.html

//Declare three array containing data to display
let books = ["The Fellowship of the Ring", "The Two Towers", "The Return of the King"];
let authors = ["Clive Staples Lewis", "Franklin Patrick Herbert Jr.", "John Ronald Reuel Tolkien"];
let publishers = ["Packt Publishing", "O'Reilly Media", "Manning Publications"];

//Sort the authors array in ascending order
authors.sort();

//Sort the publishers array in descending order
publishers.sort().reverse();

//Declare a function to display a table
function display(){

    //Declare a constant to hold the user's selection
    const choice = document.getElementById('choice').value;

    //Declare an empty variable to hold row information
    let row = "";

    //Based on the user's choice, build a string to display an html table
    switch(choice){

        //For the books case:
        case "books":

            //Declare a variable holding html code for a table
            let tblBooks = `
            <h3>Books Listing</h3>
            <table class="table">
              <thead>
                <tr>
                  <th>Title</th>
                </tr>
              </thead>
            <tbody>`;

            //For every member of the array "books"
            for(let b of books){
                //Fill the row variable with html code of a row with data
                row = `
                <tr>
                  <td>` + b + `</td>
                </tr>`

                //Concatenate the new row to the table
                tblBooks += row;
            }

            //Close the html table and table body
            tblBooks += `
              </tbody>
            </table>`

            //Display the completed table to the html document
            document.getElementById('results').innerHTML = tblBooks;
            break;
        
        //For the authors case:
        case "authors":

            //Declare a variable holding html code for a table
            let tblAuthors = `
            <h3>Authors Listing</h3>
            <table class="table">
              <thead>
                <tr>
                  <th>Title</th>
                </tr>
              </thead>
            <tbody>`;

            //For every member of the array "authors"
            for(let a of authors){
                //Fill the row variable with html code of a row with data
                row = `
                <tr>
                  <td>` + a + `</td>
                </tr>`

                //Concatenate the new row to the table
                tblAuthors += row;
            }

            //Close the html table and table body
            tblAuthors += `
              </tbody>
            </table>`

            //Display the completed table to the html document
            document.getElementById('results').innerHTML = tblAuthors;
            break;

        //For the publishers case:
        case "publishers":

            //Declare a variable holding html code for a table
            let tblPublishers = `
            <h3>Publishers Listing</h3>
            <table class="table">
              <thead>
                <tr>
                  <th>Title</th>
                </tr>
              </thead>
            <tbody>`;

            //For every member of the array "publishers"
            for(let p of publishers){
                //Fill the row variable with html code of a row with data
                row = `
                <tr>
                  <td>` + p + `</td>
                </tr>`

                //Concatenate the new row to the table
                tblPublishers += row;
            }

            //Close the html table and table body
            tblPublishers += `
              </tbody>
            </table>`

            //Display the completed table to the html document
            document.getElementById('results').innerHTML = tblPublishers;
            break;

        //For the default case
        default:
            //Display an alert asking the user to try again
            alert("Invalid selection, please try again!");
    }
}