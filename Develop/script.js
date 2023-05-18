// Assignment code here. 
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Prompt the user for password criteria. Screen questions.
  var passwordLength = parseInt(prompt("How many characters do you want for your password? This must include 8-128 characters."));
  var includeLowercase = confirm("Include lowercase letters?");
  var includeUppercase = confirm("Include uppercase letters?");
  var includeNumbers = confirm("Include numbers?");
  var includeSymbols = confirm("Include symbols?");

  // Validate the input. Password Length. NAN (Not a number).
  if (
    isNaN(passwordLength) ||
    passwordLength < 8 ||
    passwordLength > 128 ||
    (!includeLowercase && !includeUppercase && !includeNumbers && !includeSymbols)
  ) {
    alert("Please enter valid password criteria! The length of the password must be 8-128 in length!");
    return "";
  }

  // Define character sets based on criteria. Push characters.
  var Arrays = [];
  if (includeLowercase) Arrays.push("abcdefghijklmnopqrstuvwxyz");
  if (includeUppercase) Arrays.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  if (includeNumbers) Arrays.push("0123456789");
  if (includeSymbols) Arrays.push("!@#$%^&*()_+-=//';.,[]{}");

  // Generate password based on criteria. Math Random code.
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomArraySetIndex = Math.floor(Math.random() * Arrays.length);
    var randomArrayset = Arrays[randomArraySetIndex];
    password += randomArrayset[Math.floor(Math.random() * randomArrayset.length)];
  }
  return password;
}

// Write function password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
