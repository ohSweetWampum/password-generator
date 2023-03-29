
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
//Need to creat functions that prompt the user to enter info do things base of input



// asking user to enter character length between 8-128
function determineLength(){
  var length = prompt("How many characters long do you want your password to be? Number must be between 8-128.");
  if(length >= minLength && length <= maxLength){
    alert("You selected " + length + " characters long.");
  }else{ alert(" Looks like you choose a number outside our range of 8-128 ");
      determineLength();
    }
  };

// asking user if they want lower case letters
            
function wantLower(){
  var lower = prompt("Do you want lower case letters included in the password?");
  if(lower.toLowerCase() === yes){
    alert("You selected " + lower + " to included lower case.");
  }else if(lower.toLowerCase() === no){
    alert("You do not want lower case in your password.")
  } 
  
 
  
    
    // asking user if they want upper case letters
function wantUpper(){
  var upper = prompt("Do you want upper case letters included in the password?");
  if(upper){
    alert("You selected " + length + " characters long.");
  }else{ alert(" Looks like you chose a number outside our range of 8-128 ");
      wantUpper();
    }
  }


      // asking user if they want special characters
function wantSpecial(){
  var length = prompt("How many characters long do you want your password to be? Number must be between 8-128.");
  if(length >= minLength && length <= maxLength){
    alert("You selected " + length + " characters long.");
  }else{ alert(" Looks like you chose a number outside our range of 8-128 ");
      wantSpecial();
    }
  }




//need to make generatePassword function (need to define it)
function generatePassword(){

  







// // uppercase prompt
var upper = prompt("Do you want uppercase letters in your password, yes or no?");
alert("You entered " + upper)
var upperConfirmation = confirm("You said " + upper + " to having uppercase letters, is this correct?");
if (upperConfirmation){
  alert(upper + " there will be uppercase letters in your password!")
}else{
  alert("Looks like you are not sure, please enter yes or no if you want uppercase letters in your password.")
}

// // lowercase prompt
var lower = prompt("Do you want lowercase letters in your password, yes or no?");
alert("You entered " + lower)
var lowerConfirmation = confirm("You said " + lower + " to having lowercase letters, is this correct?");
if (lowerConfirmation){
  alert(lower + " there will be lowercase letters in your password!")
}else{
  alert("Looks like you are not sure, please enter yes or no if you want lowercase letters in your password.")
}

// // special characters prompt
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
