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
  if(passwordLength != null){
    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)){
      alert ("Invalid choice, Please select the number of characters between 8 - 128");
      return '';
    } 

    let smallChar = confirm('Do you want any lowercase characters in your password (a-z)');
    let largeChar = confirm('Do you want any uppercase characters in your password (A-Z)');
    let number = confirm('Do you want any numbers in your password (0-9)');
    let special = confirm('Do you want any special characters in your password (!@#$%^&*()_+-={}|[]:"<>?;,./`~)');

    if (smallChar == true ){
      allowedChar += smLetter;
    }
    
    if (largeChar == true){
      allowedChar += laLetter;
    }

    if (number == true){
      allowedChar += numbers;
    }

    if (special == true){
      allowedChar += specialChar
    }

    console.log(allowedChar);

    if (smallChar == false && largeChar == false && number == false && specialChar == false){
      alert ("Please select at least one character type");
      return '';
    }


    for (let i=0; i<passwordLength; i++){
      confirmPassword += allowedChar[Math.floor(Math.random () * allowedChar.length)]
    }
    return confirmPassword
  }
  return ''
}