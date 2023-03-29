
// setting all my global variables
var alphabetUpper = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var alphabetLower = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numericalCharacters = ["0","1","2","3","4","5","6","7","8","9",];
//Have to add a backslash "\ to the 2 and 24th items of this array, something about escape character?
var specialCharacters = ["!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];



// creating prompt, alert and confirm boxes
//length propmt
var length = prompt("How many characters long do you want in your password?");
alert("You entered " + length + " characters long");
var lengthConfirmation = confirm("You want an " + length +  " character long password, is this correct?");
if (lengthConfirmation){
  alert(length + " characters long is what you chose!")
}else{
  alert("Looks like you are not sure, please enter how many characters you want in your password.")
}


// uppercase prompt
var upper = prompt("Do you want uppercase letters in your password, yes or no?");
alert("You entered " + upper)
var upperConfirmation = confirm("You said " + upper + " to having uppercase letters, is this correct?");
if (upperConfirmation){
  alert(upper + " there will be uppercase letters in your password!")
}else{
  alert("Looks like you are not sure, please enter yes or no if you want uppercase letters in your password.")
}

// lowercase prompt
var lower = prompt("Do you want lowercase letters in your password, yes or no?");
alert("You entered " + lower)
var lowerConfirmation = confirm("You said " + lower + " to having lowercase letters, is this correct?");
if (lowerConfirmation){
  alert(lower + " there will be lowercase letters in your password!")
}else{
  alert("Looks like you are not sure, please enter yes or no if you want lowercase letters in your password.")
}

// special characters prompt
var specialChar = prompt("Do you want special characters in your password, yes or no?");
alert("You entered " + specialChar)
var specialCharConfirmation = confirm("You said " + specialChar + " to having special characters, is this correct?");
if (specialCharConfirmation){
  alert(specialChar + " there will be special characters in your password!")
}else{
  alert("Looks like you are not sure, please enter yes or no if you want special characters in your password.")
}







// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  ;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
