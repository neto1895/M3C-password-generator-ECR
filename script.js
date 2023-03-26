// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declare all variables

var ranpassword = "";
var passchar;
var arraypasschar;
var passwordlenght;
var lowercasechar = /[qwertyuiopasdfghjklzxcvbnm]/;
var uppercasechar = /[QWERTYUIOPASDFGHJKLZXCVBNM]/;
var numberchar    = /[1234567890]/;
var specialchar = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

//Ask the lenght of the password:

function fpasswordlenght(){
  passwordlenght = window.prompt("Choose the lenght of the password (min: 8 characters - max: 128 characters");
  passwordlenght = parseInt(passwordlenght);
  while (isNaN(passwordlenght)) {
      window.alert("Input not valid. Please type a number value.");
      fpasswordlenght();
  }
   while (isNaN(passwordlenght)) {
    window.alert("Input not valid. Please type a number value.");
    fpasswordlenght();
  } 
  while (passwordlenght < 8) {
    window.alert("Password too short. Please select a value between 8 - 128.");
    fpasswordlenght();
  }
  while (passwordlenght > 128) {
    window.alert("Password too long. Please select a value between 8 - 128.");
    fpasswordlenght();
  }
  return passwordlenght;
}

function fpasschar(){
  passchar = "";
  var tlowercase = window.confirm("Do you want to include lowercase characters?");
  if (tlowercase) {passchar = passchar.concat(lowercasechar);
  } console.log(passchar); console.log(passwordlenght); 
  var tuppercase = window.confirm("Do you want to include uppercase characters?");
  if (tuppercase) {passchar = passchar.concat(uppercasechar);
  }  console.log(passchar); console.log(passwordlenght);
  var tnumber = window.confirm("Do you want to include number characters?");
  if (tnumber) {passchar = passchar.concat(numberchar);
  }  console.log(passchar); console.log(passwordlenght);
  var tspecial = window.confirm("Do you want to include special characters?");
  if (tspecial) {passchar = passchar.concat(specialchar);
  } console.log(passchar); console.log(passwordlenght);
  if (passchar == 0){
    window.alert("please select at least one type of character");
    fpasschar();
  }  
  arraypasschar = [passchar, tlowercase, tuppercase, tnumber, tspecial];
  return arraypasschar;
}

function createpass(){
  for (var i = 1; i<=passwordlenght; i ++){
    var randomcharacter = Math.floor(Math.random() * passchar.length);
    ranpassword = ranpassword.concat(passchar[randomcharacter]);
  } return ranpassword;
}

function validatepass(){
  const validatelowercase = /[qwertyuiopasdfghjklzxcvbnm]/;
  console.log(validatelowercase.test(ranpassword));
  console.log(arraypasschar[1]);
   while (arraypasschar[1] != validatelowercase.test(ranpassword)){
     console.log(validatelowercase.test(ranpassword));
     console.log("Password has no lowercase, generate new password");
     ranpassword = "";
     createpass();
   }
  const validateuppercase = /[QWERTYUIOPASDFGHJKLZXCVBNM]/;
  console.log(validateuppercase.test(ranpassword));
  console.log(arraypasschar[2]);
   while (arraypasschar[2] != validateuppercase.test(ranpassword)){
     console.log("Password has no uppercase, generate new password");
     ranpassword = "";
     createpass();
   }
  const validatenumbers = /[1234567890]/;
  console.log(validatenumbers.test(ranpassword));
  console.log(arraypasschar[3]);
   while (arraypasschar[3] != validatenumbers.test(ranpassword)){
     console.log("Password has no numbers, generate new password");
     ranpassword = "";
     createpass();
   }
  const validatespecial = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  console.log(validatespecial.test(ranpassword));
  console.log(arraypasschar[4]);
   while (arraypasschar[4] != validatespecial.test(ranpassword)){
     console.log("Password has no special characters, generate new password");
     ranpassword = "";
     createpass();
   }
  password = ranpassword;
  return password;
}


function generatePassword(){
  fpasswordlenght();
  fpasschar();
  createpass();
  validatepass();
  return password;  
} 

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);