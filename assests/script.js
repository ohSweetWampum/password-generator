
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharactersList = ["!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];
var minLength = 8;
var maxLength = 128;
var yes = "yes";
var no = "no";
var usersCriteriaCharacterArray = [];
var passwordLength = "";

function determineLength(){
  var length = prompt("How many characters long do you want your password to be? Number must be between 8-128.");
  if(length >= minLength && length <= maxLength){
    alert("You selected " + length + " characters long.");
    passwordLength = parseInt(length, 10);
  }else if(length < minLength || length > maxLength){ 
    alert(" Looks like you choose a number outside our range of 8-128 ");
      determineLength();
    }
    else {
      alert("You have entered an invalid option, please enter again." );
      determineLength();
    }
}

// asking user if they want lower case letters
function wantLower(){
  var lower = prompt("Do you want lower case letters included in the password, yes or no?");
  if(lower.toLowerCase() === yes){
    alert("You selected " + lower + " to included lower case.");
    usersCriteriaCharacterArray = usersCriteriaCharacterArray.concat(lowerCase);
  }else if(lower.toLowerCase() === no){
    alert("You do not want lower case in your password.");
  } else {
    alert("Invalid option , enter yes or no");
    wantLower();
  }
}
 
// asking user if they want upper case letters
function wantUpper(){
  var upper = prompt("Do you want upper case letters included in the password, yes or no?");
  if(upper.toLowerCase() === yes){
    alert("You selected " + upper + " to included upper case.");
    usersCriteriaCharacterArray = usersCriteriaCharacterArray.concat(upperCase);
  }else if(upper.toLowerCase() === no){
    alert("You do not want upper case in your password.");
  } else {
    alert("Invalid option , enter yes or no");
    wantUpper();
  }
}

// asking user if they want special characters
function wantSpecialCharacters(){
  var specialCharacters = prompt("Do you want special characters included in the password, yes or no?");
  if(specialCharacters.toLowerCase() === yes){
    alert("You selected " + specialCharacters + " to included special characters.");
    usersCriteriaCharacterArray = usersCriteriaCharacterArray.concat(specialCharactersList);
  }else if(specialCharacters.toLowerCase() === no){
    alert("You do not want any special characters in your password.");
  } else {
    alert("Invalid option , enter yes or no");
    wantSpecialCharacters();
  }
}
        
function wantNumbers(){
  var number = prompt("Do you want numbers included in the password, yes or no?");
  if(number.toLowerCase() === yes){
    alert("You selected " + number + " to including numbers.");
    usersCriteriaCharacterArray = usersCriteriaCharacterArray.concat(numbers);
  }else if(number.toLowerCase() === no){
    alert("You do not want numbers in your password.");
  } else {
    alert("Invalid option , enter yes or no");
    wantNumbers();
  }
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
// this section takes into account what the user selected for the criteria and re-makes the arrays
function generateRandomPassword() {
 var password = "";
  for(var i = 0; i < passwordLength; i++){
    var randomCharactersGenerator = Math.floor(Math.random() * usersCriteriaCharacterArray.length);
    var selectRandomCharacterFromArray = usersCriteriaCharacterArray[randomCharactersGenerator];
    password += selectRandomCharacterFromArray;
    }
  return password;
}
function printOutPassword(){
determineLength();
wantLower();
wantUpper();
wantSpecialCharacters();
wantNumbers();
var password = generateRandomPassword();
var passwordText = document.querySelector("#password");
passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", printOutPassword);



