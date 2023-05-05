//Title: hochdoerfer-in-n-out-books.js
//Author: Kyle Hochdoerfer
//Date: 5/1/23
//Description: JavaScript for hochdoerfer-in-and-out-books.html

//Declare three book objects with an isbn, title, and page count
const book1 = {
    isbn: "0261103571",
    title: "The Fellowship of the Ring",
    pages: 432
};
const book2 = {
    isbn: "1514297272",
    title: "The Two Towers",
    pages: 322
};
const book3 = {
    isbn: "1514298139",
    title: "The Return of the King",
    pages: 432
};

//Declare three author objects with a name and genre(s)
const author1 = {
    name: "John Ronald Reuel Tolkien",
    genre: "Fantasy"
};
const author2 = {
    name: "Franklin Patrick Herbert Jr.",
    genre: "Science Fiction"
};
const author3 = {
    name: "Clive Staples Lewis",
    genre: "Fantasy, science fiction, children's literature"
};

//Declare a function to display a table
function display(){

    //Declare a constant to hold the user's selection
    const choice = document.getElementById('choice').value;

    //Based on the user's choice, build a string to display an html table
    switch(choice){

        //For the books case:
        case "books":

            //Declare a variable holding html code for a table
            let tblBooks = `
            <h3>Top 3 Favorite Books</h3>
            <table class="table">
              <thead>
                <tr>
                  <th>ISBN</th>
                  <th>Title</th>
                  <th>Pages</th>
                </tr>
              </thead>
            <tbody>
                <tr>
                  <td>` + book1.isbn + `</td>
                  <td>` + book1.title + `</td>
                  <td>` + book1.pages + `</td>
                </tr>
                <tr>
                  <td>` + book2.isbn + `</td>
                  <td>` + book2.title + `</td>
                  <td>` + book2.pages + `</td>
                </tr>
                <tr>
                  <td>` + book3.isbn + `</td>
                  <td>` + book3.title + `</td>
                  <td>` + book3.pages + `</td>
                </tr>
              </tbody>
            </table>`;

            //Display the completed table to the html document
            document.getElementById('results').innerHTML = tblBooks;
            break;
        
        //For the authors case:
        case "authors":

            //Declare a variable holding html code for a table
            let tblAuthors = `
            <h3>Top 3 Favorite Authors</h3>
            <table class="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Genre</th>
                </tr>
              </thead>
            <tbody>
                <tr>
                  <td>` + author1.name + `</td>
                  <td>` + author1.genre + `</td>
                </tr>
                <tr>
                  <td>` + author2.name + `</td>
                  <td>` + author2.genre + `</td>
                </tr>
                <tr>
                  <td>` + author3.name + `</td>
                  <td>` + author3.genre + `</td>
                </tr>
              </tbody>
            </table>`;

            //Display the completed table to the html document
            document.getElementById('results').innerHTML = tblAuthors;
            break;

            //For the default case:
            default:
                //Display an alert asking the user to try again
                alert("Invalid selection, please try again!");
        }
    }