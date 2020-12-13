// Assignment Code
var generateBtn = document.querySelector("#generate");
// vars declared with console.log to check functionality
var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
console.log(alphabet);
var alphabetUpper = "abcdefghijklmnopqrstuvwxyz".toUpperCase("").split("");
console.log(alphabetUpper);
// special chars exluding " " (space)
var specialChar = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split("");
console.log(specialChar);
var numb = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numb);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function writePassword() {
  // wrapping length prompt in function to call back to when false
  var pwLength = prompt("How many characters, between 8 and 128, will your password have?");
  var pwLength = parseInt(pwLength);
  if (pwLength >= 8 && pwLength <= 128) {
    alert("Your password will be " + pwLength + " characters long.");
    console.log();
  } else {
    alert("Must be between 8 and 128 characters");
    console.log("false");
    writePassword()
  }
  var capital = confirm("Allow capital letters?");
    if (capital === true) {
      console.log(capital);
    }
    else {
      console.log(capital);
    }
  var specialCharBool = confirm("Allow special characters? @, %, ^");
    if (specialCharBool === true) {
      console.log(specialCharBool);
    }
    else {
      console.log(specialCharBool);
    }
}
