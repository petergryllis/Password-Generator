var passwordDOM = document.getElementById("password");
var copybtnDOM = document.getElementById("Copy");
var lengthDOM = document.getElementById("length");
var uppercaseDOM = document.getElementById("uppercase");
var numbersDOM = document.getElementById("numbers");
var symbolsDOM = document.getElementById("symbols");






// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
