//Title: hochdoerfer-temp-conversion.js
//Author: Kyle Hochdoerfer
//Date: 3/20/23
//Description: JavaScript for hochdoerfer-payroll.html

//Declare variables for Beethoven's payment information
const beethovenFirstName = "Ludwig"
const beethovenLastName = "Beethoven"
const beethovenAddress = "505 Main Street"
const beethovenHireDate = new Date().toLocaleDateString('en-US')
const beethovenPayRate = 18.92.toFixed(1)

//Declare variables for Bach's payment information
const bachFirstName = "Johann"
const bachLastName = "Bach"
const bachAddress = "512 Main Street"
const bachHireDate = new Date().toLocaleDateString('en-US')
const bachPayRate = 25.501.toFixed(1)

//Declare variables for Mozart's payment information
const mozartFirstName = "Wolfgang"
const mozartLastName = "Mozart"
const mozartAddress = "600 Main Street"
const mozartHireDate = new Date().toLocaleDateString('en-US')
const mozartPayRate = 50.105.toFixed(1)

//Set the innerHTML for Beethoven's payment information to his variables
document.getElementById("one").innerHTML = beethovenFirstName
document.getElementById("two").innerHTML = beethovenLastName
document.getElementById("three").innerHTML = beethovenAddress
document.getElementById("four").innerHTML = beethovenHireDate
document.getElementById("five").innerHTML = beethovenPayRate

//Set the innerHTML for Bach's payment information to his variables
document.getElementById("six").innerHTML = bachFirstName
document.getElementById("seven").innerHTML = bachLastName
document.getElementById("eight").innerHTML = bachAddress
document.getElementById("nine").innerHTML = bachHireDate
document.getElementById("ten").innerHTML = bachPayRate

//Set the innerHTML for Mozart's payment information to his variables
document.getElementById("eleven").innerHTML = mozartFirstName
document.getElementById("twelve").innerHTML = mozartLastName
document.getElementById("thirteen").innerHTML = mozartAddress
document.getElementById("fourteen").innerHTML = mozartHireDate
document.getElementById("fifteen").innerHTML = mozartPayRate