// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Global arrays
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharactersList = ["!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];

//Global Varaiables
var minLength = 8;
var maxLength = 128;
var yes = "yes";
var no = "no";

//Initializing Empty Gloabal Arrays which will be used to store user selections
var usersCriteriaCharacterArray = [];
var passwordLength = "";

//Function that asks user for desired character length and validates it to ensure it is between 8-128
function determineLength(){
  var length = prompt("How many characters long do you want your password to be? Number must be between 8-128.");
  if(length >= minLength && length <= maxLength){
    alert("You selected " + length + " characters long.");
    passwordLength = parseInt(length, 10);
  } else if(length < minLength || length > maxLength){ 
    alert(" Looks like you chose a number outside the range of 8-128, please select a number inside this range. ");
    determineLength();
  } else{
    alert("You have entered an invalid option, please enter again." );
    determineLength();
  }
}

// Function that asks the user if they want lowercase letters in their password, it validates the input to ensure either "yes" or "no" are selected
function wantLower(){
  var lower = prompt("Do you want lowercase letters included in the password, yes or no?");
  if(lower.toLowerCase() === yes){
    alert("You selected " + lower + " to including lowercase.");
    usersCriteriaCharacterArray = usersCriteriaCharacterArray.concat(lowercase);
  } else if(lower.toLowerCase() === no){
    alert("You do not want lower case letters in your password.");
  } else {
    alert("Invalid option , enter 'yes' or 'no'");
    wantLower();
  }
 
}
 
// Function that asks the user if they want uppercase letters in their password, it validates the input to ensure either "yes" or "no" are selected
function wantUpper(){
  var upper = prompt("Do you want uppercase letters included in the password, yes or no?");
  if(upper.toLowerCase() === yes){
    alert("You selected " + upper + " to including uppercase.");
    usersCriteriaCharacterArray = usersCriteriaCharacterArray.concat(uppercase);
  } else if(upper.toLowerCase() === no){
    alert("You do not want uppercase in your password.");
  } else {
    alert("Invalid option , enter 'yes' or 'no'");
    wantUpper();
  }
}

// Function that asks the user if they want special characters in their password, it validates the input to ensure either "yes" or "no" are selected
function wantSpecialCharacters(){
  var specialCharacters = prompt("Do you want special characters included in the password, yes or no?");
  if(specialCharacters.toLowerCase() === yes){
    alert("You selected " + specialCharacters + " to including special characters.");
    usersCriteriaCharacterArray = usersCriteriaCharacterArray.concat(specialCharactersList);
    
  } else if(specialCharacters.toLowerCase() === no){
    alert("You do not want any special characters in your password.");
  } else {
    alert("Invalid option , enter 'yes' or 'no'");
    wantSpecialCharacters();
  }
}

// Function that asks the user if they want numberss in their password, it validates the input to ensure either "yes" or "no" are selected 
function wantNumbers(){
  var number = prompt("Do you want numbers included in the password, yes or no?");
  if(number.toLowerCase() === yes){
    alert("You selected " + number + " to including numbers.");
    usersCriteriaCharacterArray = usersCriteriaCharacterArray.concat(numbers);
  } else if(number.toLowerCase() === no){
    alert("You do not want numbers in your password.");
    // If the user has not slected a character by now, they will be returned to the wantLower function to start over
    alert("You need to select at least 1 character type");
    wantLower();
  } else {
    alert("Invalid option , enter 'yes' or 'no'");
    wantNumbers();
  }
}

// Function that starts the entire process in correct order
function intiateEntireProcess(){
  determineLength();
  wantLower();
  wantUpper();
  wantSpecialCharacters();
  wantNumbers()

}

//Function that generates a random password based off the user criteria that they chose. Then it sends the value to the HTML element where id= password is in, displaying it on the screen.
function generateRandomPassword() {
  var password = "";
  for(var i = 0; i < passwordLength; i++){
    var randomCharactersGenerator = Math.floor(Math.random() * usersCriteriaCharacterArray.length);
    var selectRandomCharacterFromArray = usersCriteriaCharacterArray[randomCharactersGenerator];
    password += selectRandomCharacterFromArray;
    }
  return password;
}

//Adding a function to display the password
function displayThePasswordToUser(){
  intiateEntireProcess();
  var password = generateRandomPassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", displayThePasswordToUser);


