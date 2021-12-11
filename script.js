
//Establish the DOM html elements
var passwordDOM = document.getElementById("password");
var copybtnDOM = document.getElementById("Copy");
var lengthDOM = document.getElementById("length");
var uppercaseDOM = document.getElementById("uppercase");
var numbersDOM = document.getElementById("numbers");
var symbolsDOM = document.getElementById("symbols");

//generate character does for the Generate Password application using ASCII Character Codes Table
var UPPERCASE_CODES = arrayFromLowToHigh(65, 90);
var LOWERCASE_CODES = arrayFromLowToHigh(97, 122);
var NUMBER_CODES = arrayFromLowToHigh(48, 57);
var SYMBOL_CODES = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123, 126));




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
