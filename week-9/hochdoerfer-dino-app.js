//Title: hochdoerfer-dino-app.js
//Author: Kyle Hochdoerfer
//Date: 5/8/23
//Description: JavaScript for hochdoerfer-dino-app.html

//Declare a gigantosaurus class with a constructor for the name
class gigantosaurus {
    constructor(name){
        this.name = name;
    }

    //Return a string with the name and roar of the gigantosaurus
    roar(){
        return this.name + " says: roooooaaaar";
    }
}

//Declare a tyrannosaurus class that inherits the gigantosaurus class and constructor
class tyrannosaurus extends gigantosaurus {
    constructor(name){
        super(name);
    }

    //Return a string with the name and roar of the tyrannosaurus
    growl(){
        return this.name + " says: groooowwwwl";
    }
}

//Declare a velociraptor class that inherits the tyrannosaurus class and constructor
class velociraptor extends tyrannosaurus {
    constructor(name){
        super(name);
    }

    //Return a string with the name and roar of the velociraptor
    awk(){
        return this.name + " says: awwwwwwwk";
    }
}

//Declare an instance of the velociraptor class
const dino = new velociraptor("Blue");

//Declare a function to display a dinosaur
function display(){
    //Declare an empty variable to hold the user's choice
    let choice = "";

    //Declare a constant to hold radio options
    const dinosaurs = document.getElementsByName('dino-type');
    
    //For each radio option:
    for(let option of dinosaurs){
        //If the current option is selected
        if (option.checked) {
            //Set choice equal to the chosen dinosaur
            choice = option.value;
        }
    }

    //Based on the user's choice, output the selected dinosaur roar
    switch(choice){

        //For the gigantosaurus case:
        case "gigantosaurus":

            //Display the selected roar to the html document
            document.getElementById('results').innerHTML = dino.roar()
            break;
        
        //For the trex case:
        case "trex":

            //Display the selected roar to the html document
            document.getElementById('results').innerHTML = dino.growl();
            break;

        //For the raptor case:
        case "raptor":

            //Display the selected roar to the html document
            document.getElementById('results').innerHTML = dino.awk();
            break;

        //For the default case
        default:
            //Display an alert asking the user to try again
            alert("Invalid selection, please try again!");
    }
}