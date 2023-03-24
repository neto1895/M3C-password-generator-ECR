// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declare all variables
var password = "";
var passchar = "";
var PasswordLenght;
var lowercasechar = "qwertyuiopasdfghjklzxcvbnm";
var uppercasechar = "QWERTYUIOPASDFGHJKLZXCVBNM";
var numberchar    = "1234567890";
var specialchar = " \"!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

//Ask the lenght of the password:

function createpass(){
  var PasswordLenght = window.prompt("Choose the lenght of the password (min: 8 characters - max: 128 characters");
  PasswordLenght = parseInt(PasswordLenght);
  console.log(PasswordLenght);
  console.log(typeof PasswordLenght);
  if (isNaN(PasswordLenght)) {
    window.alert("Input not valid. Please type a number value.");
    createpass();
  } else {
    if (PasswordLenght < 8) {
      window.alert("Password too short. Please select a value between 8 - 128.");
      createpass();
    } else {
      if (PasswordLenght > 128) {
        window.alert("Password too long. Please select a value between 8 - 128."); 
        createpass();
      } else {
        console.log(PasswordLenght);
        
        passchar = "";
        var lowercase = window.confirm("Do you want to include lowercase characters?");
        if (lowercase) {passchar = passchar.concat(lowercasechar);
        }   var uppercase = window.confirm("Do you want to include uppercase characters?");
        if (uppercase) {passchar = passchar.concat(uppercasechar);
        }  var number = window.confirm("Do you want to include number characters?");
        if (number) {passchar = passchar.concat(numberchar);
        }  var special = window.confirm("Do you want to include special characters?");
        if (special) {passchar = passchar.concat(specialchar);
        } 
        console.log(PasswordLenght);
        console.log(passchar);
        for (var i = 1; i<=PasswordLenght; i ++){
          var passChar = Math.floor(Math.random() * totalChars.length);
          password += totalChars.charAt(passChar);
          
        }

      }
    }
  }
}






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
