// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declare all variables
var password = "";
var passchar = "";
var PasswordLenght;
var lowercasechar = "qwertyuiopasdfghjklzxcvbnm";
var uppercasechar = "QWERTYUIOPASDFGHJKLZXCVBNM";
var numberchar    = "1234567890";
var specialchchar = " \"!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

//Ask the lenght of the password:

function funpasswordlenght(){
  var PasswordLenght = window.prompt("Choose the lenght of the password (min: 8 characters - max: 128 characters");
  PasswordLenght = parseInt(PasswordLenght);
  console.log(PasswordLenght);
  console.log(typeof PasswordLenght);
  if (isNaN(PasswordLenght)) {
    window.alert("Input not valid. Please type a number value.");
    console.log("Input not valid. Please type a number value.")
    funpasswordlenght();
  } else {
    if (PasswordLenght < 8) {
      window.alert("Password to short. Please select a value between 8 - 128.")
      console.log("Password to short. Please select a value between 8 - 128.")
      funpasswordlenght();
    }
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
