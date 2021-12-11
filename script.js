var form = document.getElementById('passwordGeneratorForm')
var passwordDisplay = document.getElementById('passwordDisplay')

//link the DOM html elements
var passwordDOM = document.getElementById("password");
var copybtnDOM = document.getElementById("Copy");
var lengthDOM = document.getElementById("length");
var uppercaseDOM = document.getElementById("uppercase");
var numbersDOM = document.getElementById("numbers");
var symbolsDOM = document.getElementById("symbols");

var charCode = "a".charCodeAt(33, 126);
console.log(charCode);

//Establish the ASCII character codes
var uppercase_char_codes = ASCIIarrayLowtoHigh(65, 90)
var lowercase_char_codes = ASCIIarrayLowtoHigh (97, 122)
var number_char_codes = ASCIIarrayLowtoHigh (48, 57)
var symbol_char_codes = ASCIIarrayLowtoHigh (33, 47).concat(
  ASCIIarrayLowtoHigh(58, 64)
).concat(
  ASCIIarrayLowtoHigh(91, 96)
).concat(
  ASCIIarrayLowtoHigh(123, 126)
)

body.addEventListener('submit', e => {
  e.preventDefault() 
  var characterAmount = lengthDOM.value
  var includeUppercase = uppercaseDOM.checked
  var includeNumbers = numbersDOM.checked
  var includeSymbols = symbolsDOM.checked
  var password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
  passwordDisplay.innerText = password
})

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols){
  let charCodes = lowercase_char_codes
  if (includeUppercase) charCodes = charCodes.concat (uppercase_char_codes)
  if (includeSymbols) charCodes = charCodes.concat(symbol_char_codes)
  if (includeNumbers) charCodes = charCodes.concat(number_char_codes)
}

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
  let charCodes = lowercase_char_codes
  if (includeUppercase) charCodes = charCodes.concat (uppercase_char_codes)
  if (includeSymbols) charCodes = charCodes.concat(symbol_char_codes)
  if (includeNumbers) charCodes = charCodes.concat(number_char_codes)

  var passwordCharacters = []
  for (let i = 0; i < characterAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(characterCode)
  }
  return passwordCharacters.join('')
}


function ASCIIarrayLowToHigh(low, high) { 
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

function syncCharacterAmount(e) {
  const value = e.target.value
  characterAmount.value = value
  
}



