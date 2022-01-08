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

function generatePassword(){

  let smLetter = 'abcdefghijklmnopqrstuvwxyz'
  let laLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let specialChar = '!@#$%^&*()_+-={}|[]:"<>?;,./`~'
  let numbers = '1234567890'
  let allowedChar = ''
  let confirmPassword = ''

  var passwordLength = prompt("Select number of characters you would like your password to be. \nMust be between 8 - 128 characters.");

  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength) || passwordLength == 0){
    alert ("Invalid choice, Please try again");
    return;
  }
  console.log(passwordLength)
}