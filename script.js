// Assignment Code
var generateBtn = document.querySelector("#generate");
// vars declared with console.log to check functionality
var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
console.log(alphabet);
var alphabetUpper = "abcdefghijklmnopqrstuvwxyz".toUpperCase("").split("");
console.log(alphabetUpper);
var specialChar = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split("");
console.log(specialChar);
var numb = [0,1,2,3,4,5,6,7,8,9];
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
  // wrapping charLength prompt in function to call back to when false
  var pwLength = prompt(
    "How many characters, between 8 and 128, will your password have?"
  );
  var pwLength = parseInt(pwLength);
  console.log("length is " + pwLength);
  if (pwLength >= 8 && pwLength <= 128) {
    console.log(pwLength);
  } else {
    alert("Must be between 8 and 128 characters");
    console.log(pwLength);
    writePassword();
  }
  var capital = confirm("Allow capital letters?");
  console.log(capital);
  var specialCharBool = confirm("Allow special characters? @, %, ^");
  console.log(specialCharBool);
  var numbers = confirm("Allow numbers 0-9?");
  console.log(numbers);

  generatePassword();
  function generatePassword() {
    // log to check functionality of vars
    //console.log(pwLength, capital, specialCharBool, numb);
    var charArray = [];
      if (numbers) for (i = 0; i < numb.length; i++) {
      charArray.push(numb[i]);
      }
      console.log(charArray);
      if (specialCharBool) for (j = 0; j < specialChar.length; j++) {
      charArray.push(specialChar[j])
      }
      console.log(charArray);
      if (capital) for (k = 0; k < alphabetUpper.length; k++) {
      charArray.push(alphabetUpper[k]);
      }
      console.log(charArray);
      //always push alphabet
      for (m = 0; m < alphabet.length; m++) {
        charArray.push(alphabet[m]);
      }
      console.log(charArray);



    var password = "";
      for (n = 0; n < parseInt(pwLength); n++) {
        password += (charArray[Math.floor(Math.random() * charArray.length)]);
    }
    console.log(password);
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
  }
