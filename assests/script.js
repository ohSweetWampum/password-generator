



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




// asking user to enter character length between 8-128, they will be returned to function determineLength if they go outsude 8-128 or enter invalid character such as %.

//created this  entireProcess function as the other functions were not getting called, figure I'd just make a function to call the other functions
// function entireProcess(){
//   determineLength();
//   wantLower();
//   wantSpecialCharacters();
//   wantUpper();
// }


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
  var lower = prompt("Do you want lower case letters included in the password?");
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
  var upper = prompt("Do you want upper case letters included in the password?");
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
  var specialCharacters = prompt("Do you want special characters included in the password?");
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
        






// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
// this section takes into account what the user selected for the criteria and re-makes the arrays
function generateRandomPassword() {
  var userSelections = [];
  if (wantLower() === yes){ 
    userSelections = userSelections.concat(allCharactersLettersNumbers);

  }
  if (wantUpper() === yes){ 
    userSelections = userSelections.concat(allCharactersLettersNumbers);

  }
  if (wantSpecialCharacters() === yes){ 
    userSelections = userSelections.concat(allCharactersLettersNumbers);

  }

  var password = "";
  for(var i = 0; i < length; i++){
    var randomCharactersGenerator = allCharactersLettersNumbers [Math.floor(Math.random() * allCharactersLettersNumbers.length)];
    password += randomCharactersGenerator;

  }

  return password;

}

//to store users inputs
function writePass(){
  var length = determineLength();
  var wantLower = wantLower() === "yes";
  var wantUpper = wantUpper() === "yes";
  var wantSpecialCharacters = wantSpecialCharacters() === "yes";
}





  var passwordText = document.querySelector("#password");


  passwordText.value = password;
  
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



