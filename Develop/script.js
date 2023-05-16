// Assignment code here
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Prompt the user for password criteria
  var passwordLength = parseInt(prompt("How many characters do you want for your password? This must include 8-128 characters."));
  var includeLowercase = confirm("Include lowercase letters?");
  var includeUppercase = confirm("Include uppercase letters?");
  var includeNumbers = confirm("Include numbers?");
  var includeSymbols = confirm("Include symbols?");

  // Validate the input
  if (
    isNaN(passwordLength) ||
    passwordLength < 8 ||
    passwordLength > 128 ||
    (!includeLowercase && !includeUppercase && !includeNumbers && !includeSymbols)
  ) {
    alert("Please enter valid password criteria! The length of the passord must be 8-128 in length!");
    return "";
  }

  // Define character sets based on criteria
  var charSets = [];
  if (includeLowercase) charSets.push("abcdefghijklmnopqrstuvwxyz");
  if (includeUppercase) charSets.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  if (includeNumbers) charSets.push("0123456789");
  if (includeSymbols) charSets.push("!@#$%^&*()_+-=//';.,[]{}");

  // Generate password based on criteria
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomCharSetIndex = Math.floor(Math.random() * charSets.length);
    var randomCharSet = charSets[randomCharSetIndex];
    password += randomCharSet[Math.floor(Math.random() * randomCharSet.length)];
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);