



var allCharactersLettersNumbers = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~","0","1","2","3","4","5","6","7","8","9"];




// // setting all my global variables
// var alphabetUpperList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// var alphabetLowerList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// var numericalCharactersList = ["0","1","2","3","4","5","6","7","8","9",];
// //Have to add a backslash "\ to the 2 and 24th items of this array, something about escape character?
// var specialCharactersList = ["!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];
var minLength = 8;
var maxLength = 128;
var yes = "yes";
var no = "no";






// asking user to enter character length between 8-128, they will be returned to function determineLength if they go outsude 8-128 or enter invalid character such as %.

//created this  entireProcess function as the other functions were not getting called, figure I'd just make a function to call the other functions
function entireProcess(){
  determineLength();
  wantLower();
  wantSpecialCharacters();
  wantUpper();
}

function determineLength(){
  var length = prompt("How many characters long do you want your password to be? Number must be between 8-128.");
  if(length >= minLength && length <= maxLength){
    alert("You selected " + length + " characters long.");
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
  var lower = prompt("Do you want lower case letters included in the password?");
  if(lower.toLowerCase() === yes){
    alert("You selected " + lower + " to included lower case.");
  }else if(lower.toLowerCase() === no){
    alert("You do not want lower case in your password.");
  } else {
    alert("Invalid option , enter yes or no");
    wantLower();
  }
}
 
// asking user if they want upper case letters
function wantUpper(){
  var upper = prompt("Do you want upper case letters included in the password?");
  if(upper.toLowerCase() === yes){
    alert("You selected " + upper + " to included lower case.");
  }else if(upper.toLowerCase() === no){
    alert("You do not want upper case in your password.");
  } else {
    alert("Invalid option , enter yes or no");
    wantUpper();
  }
}

// asking user if they want special characters
function wantSpecialCharacters(){
  var specialCharacters = prompt("Do you want special characters included in the password?");
  if(specialCharacters.toLowerCase() === yes){
    alert("You selected " + specialCharacters + " to included lower case.");
  }else if(specialCharacters.toLowerCase() === no){
    alert("You do not want any special characters in your password.");
  } else {
    alert("Invalid option , enter yes or no");
    wantSpecialCharacters();
  }
}
        






// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function generateRandomPassword() {
  var password = "";
  for(var i = 0; i ,)

  var randomCharactersGenerator = allCharactersLettersNumbers [Math.floor(Math.random() * allCharactersLettersNumbers.length)];






  var passwordText = document.querySelector("#password");


  passwordText.value = password;
  
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



