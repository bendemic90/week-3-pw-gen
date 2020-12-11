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
