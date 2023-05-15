// Assignment Code generates button
var generateBtn = document.querySelector("#generate");

//no value after creation. return password.
function generatePassword(){
  console.log("After button click");

//1. psuedo code. WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//Password Lendth 8-128 characters. Lowercase, uppercase, numbers, special characters.
//imput validation tthen display the password. 

  return "Generated Password here";
}

//GIVEN I need a new, secure password

// Write password to the #password input, no function & card
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //displays on screen
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// var cars ={ "EXAMPLE POPUP"
// make: "Honda",
// model: "civic",
 // year: 2003,
 // displaylist: function() {
   // alert("make: " + cars.make);
 // }

//cars.displaylist();

// We use a for-loop to execute code more than once
//for (var i = 0; i < 5; i++) {
    // This is the block of code that will run each time
    //console.log("This is the current value of i: " + i + ".");
//}

// For-loops are often used to iterate over arrays
//var zooAnimals = ["Bears", "Giraffes", "Penguins", "Meerkats"];

//To determine how many times the loop should execute, we use the array's length
////for (var i = 0; i < zooAnimals.length; i++) { 
   // console.log("I am going to zoo to see " + zooAnimals[i] + ".");
//}