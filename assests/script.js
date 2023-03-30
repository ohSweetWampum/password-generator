
// // //psuedocode
// // How do I validate that the user is choosing between 8 and 128 characters? What happens when they choose outside this range?
// 1. prompt the user for length of 8 to 128, ask if the want special , lower or upper. --->  prompt window method, etc, if they say no(cancel) to all then say "you must select at leats one type of character", send them to the beginning
// 2. validate the input, make sure its 8-128 , at least 1 character type should be entered---> make array of characters, if else for 8-128,
//3. generate password based of of entered criteria
// 4.display the generated password on the page







// // setting all my global variables
var alphabetUpperList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var alphabetLowerList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numericalCharactersList = ["0","1","2","3","4","5","6","7","8","9",];
//Have to add a backslash "\ to the 2 and 24th items of this array, something about escape character?
var specialCharactersList = ["!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];
var minLength = 8;
var maxLength = 128;
var yes = "yes";
var no = "no";



Function entirePasswordGenProcess(){


// asking user to enter character length between 8-128, they will be returned to function determineLength if they go outsude 8-128 or enter invalid character such as %.
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
