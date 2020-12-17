// Assignment Code
var generateBtn = document.querySelector("#generate");
// vars declared with console.log to check functionality
var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
console.log(alphabet);
var alphabetUpper = "abcdefghijklmnopqrstuvwxyz".toUpperCase("").split("");
console.log(alphabetUpper);
var specialChar = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split("");
console.log(specialChar);
var numb = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numb);
console.log("checking arrays working");
//
//
//
//
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// calls back to when pwLength false
function writePassword() {
  var pwLength = prompt(
    "How many characters, between 8 and 128, will your password have?"
  );
  var pwLength = parseInt(pwLength);
  console.log("length is " + pwLength);
  if (pwLength >= 8 && pwLength <= 128) {
    console.log(pwLength + " allowed, proceeding.");
  } else {
    alert("Must be between 8 and 128 characters");
    console.log(pwLength + " outside acceptable parameters.");
    return writePassword();
  }
  //confirms for character conditions (numbers, capitals etc) with logging
  var capital = confirm("Allow capital letters?");
  console.log(capital);
  var lower = confirm("Allow lower case letters?");
  console.log(lower);
  var specialCharBool = confirm("Allow special characters? @, %, ^");
  console.log(specialCharBool);
  var numbers = confirm("Allow numbers 0-9?");
  console.log(numbers);

  generatePassword();
  function generatePassword() {
    // log to check functionality of vars
    console.log(pwLength, capital, specialCharBool, numb);

    //create empty array to fill with arrays declared earlier based on userinput
    var charArray = [];

    if (numbers)
      for (i = 0; i < numb.length; i++) {
        charArray.push(numb[i]);
      }
    console.log(charArray); //logs each time to check the array is growing

    if (specialCharBool)
      for (j = 0; j < specialChar.length; j++) {
        charArray.push(specialChar[j]);
      }
    console.log(charArray); //logs each time to check the array is growing

    if (capital)
      for (k = 0; k < alphabetUpper.length; k++) {
        charArray.push(alphabetUpper[k]);
      }
    console.log(charArray); //logs each time to check the array is growing

    if (lower)
      for (m = 0; m < alphabet.length; m++) {
        charArray.push(alphabet[m]);
      }
    console.log(charArray); //logs each time to check the array is growing

    // checks if no modifiers are selected, if so returns to writePassword
    if (!lower && !capital && !specialCharBool && !numbers) {
      alert("No conditions met, starting again.");
      return writePassword();
    }
    // password fill, sets password "" AKA empty
    var password = "";
    for (n = 0; n < parseInt(pwLength); n++) {
      password += charArray[Math.floor(Math.random() * charArray.length)];
      // += concats the formula into password with random selection from charArray = to pwLength
    }
    console.log(password); //logs pw to check against screen output

    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}
