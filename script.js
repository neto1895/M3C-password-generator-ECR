// Assignment Code
var generateBtn = document.querySelector("#generate");
// Declare all variables
var ranpassword = "";
var passchar;
var arraypasschar;
var passwordlenght;
var lowercasechar = "qwertyuiopasdfghjklzxcvbnm";
var uppercasechar = "QWERTYUIOPASDFGHJKLZXCVBNM";
var numberchar    = "1234567890";
var specialchar = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/; // Var declared this way to not interfere with the validation of special characters
//Ask the lenght of the password:
function fpasswordlenght(){
  passwordlenght = window.prompt("Choose the lenght of the password (min: 8 characters - max: 128 characters");
  passwordlenght = parseInt(passwordlenght); // change the type of var to test if isNaN
   while (isNaN(passwordlenght)) {
    window.alert("Input not valid. Please type a number value.");
    fpasswordlenght();
  } while (passwordlenght < 8) {
    window.alert("Password too short. Please select a value between 8 - 128.");
    fpasswordlenght();
  } while (passwordlenght > 128) {
    window.alert("Password too long. Please select a value between 8 - 128.");
    fpasswordlenght();
  } return passwordlenght;
}
// Ask what character wants the user in the password
function fpasschar(){
  passchar = ""; // cleans the variable to not concat with previus iterations
  var tlowercase = window.confirm("Do you want to include lowercase characters?");
  if (tlowercase) {passchar = passchar.concat(lowercasechar);
  } var tuppercase = window.confirm("Do you want to include uppercase characters?");
  if (tuppercase) {passchar = passchar.concat(uppercasechar);
  } var tnumber = window.confirm("Do you want to include number characters?");
  if (tnumber) {passchar = passchar.concat(numberchar);
  } var tspecial = window.confirm("Do you want to include special characters?");
  if (tspecial) {passchar = passchar.concat(specialchar);
  } 
  if (passchar == 0){
    window.alert("please select at least one type of character");
    fpasschar(); // calls the function again to select at least one option
  }  // create an array to test if the user criteria is met in the generated password
  arraypasschar = [passchar, tlowercase, tuppercase, tnumber, tspecial]; 
  return arraypasschar;
}
// Create the password using input user criteria
function createpass(){ 
  ranpassword = ""; // Erase previus password results so the user doesn't have to refresh to create another password
  for (var i = 1; i<=passwordlenght; i ++){
    var randomcharacter = Math.floor(Math.random() * passchar.length);
    ranpassword = ranpassword.concat(passchar[randomcharacter]);
  } return ranpassword; // temporal variable to be tested in the validating process
}
// Validating process to test if the password contains all type of characters that he selected
function validatepass(){
  const validatelowercase = /[qwertyuiopasdfghjklzxcvbnm]/; //RegExp value to use .text function
   while (arraypasschar[1] != validatelowercase.test(ranpassword)){
     console.log(ranpassword, ": Password has no lowercase, generating new password");
     ranpassword = "";  // Erase previus password results
     createpass();      // Calls function to generate a new password
     validatepass();    // Calls validating process to don't skip accepting criteria in any following iteration
   }  const validateuppercase = /[QWERTYUIOPASDFGHJKLZXCVBNM]/;
   while (arraypasschar[2] != validateuppercase.test(ranpassword)){
     console.log(ranpassword, ": Password has no uppercase, generating new password");
     ranpassword = "";
     createpass(); validatepass();
   }  const validatenumbers = /[1234567890]/;
   while (arraypasschar[3] != validatenumbers.test(ranpassword)){
     console.log(ranpassword, ": Password has no numbers, generating new password");
     ranpassword = "";
     createpass(); validatepass();
   }  const validatespecial = /[ `!@#$%^&*()_+\-=\[\]{};:\\|,.<>\/?~]/;
   while (arraypasschar[4] != validatespecial.test(ranpassword)){
     console.log(ranpassword, ": Password has no special characters, generating new password");
     ranpassword = "";
     createpass(); validatepass();
   } password = ranpassword; // Create final password to print in the html page
  return password;
}
function generatePassword(){ // Main function to call all the subprocess.
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