# password-generator

A password generator that can generate random passwords based on criteria that the user has selected

## Visit the Site

[Cleck Here to Visit the Deployed Site](https://ohsweetwampum.github.io/password-generator/)

## Description

This program asks the user how long they want their password to be (min 8 - max 128) and if they would like to include lowercase letters, uppercase letters, numbers, or special characters in their password. The user must select at least 1 character type (lowercase, uppercase, special character, number). They must answer either "yes" or "no" to all prompts about character type or 8-18 for the password length prompt, if they fail to do any if this, they will be sent to the beginning of the program to start over. A password is randomly generated based off the user criteria.

## Technology Used

- JavaScript
  [Learn about JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

- HTML
  [Learn about HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)

- CSS
  [Learn about CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

- Git
  [Learn about Git](https://git-scm.com/)

## Usage

1. Click red "Generate Password".
2. Enter number between 8-128.
3. Enter "yes" or "no" to having lowercase letters included.
4. Enter "yes" or "no" to having uppercase letters included.
5. Enter "yes" or "no" to having special characters included.
6. Your password will show up in the text box!

![Alt Text](./assests/gifs/Password-App-Demo.gif)

## Code Highlight

I wanted to highlight this code snippet because it took me forever to get right. I basically finished my entire code when I realized that I forgot that I needed to make sure that the user selects at least 1 character type. So this function starts the entire process in correct order, empties out the global array if the user is running the program after their first try. It uses a while loop to ensure that the user selects at least 1 character type before the program generates the password.

```JavaScript
function intiateEntireProcess(){
  usersCriteriaCharacterArray = [];
  determineLength();
  while (usersCriteriaCharacterArray.length === 0){
    wantLower();
    wantUpper();
    wantSpecialCharacters();
    wantNumbers();
    if (usersCriteriaCharacterArray.length === 0) {
    alert("You must select at least 1 character type");

}
}
}

```

## Learning Points

- Learned how to use functions in conjuction with else if statements, prompts, alerts
- Learned the importance of ensuring functions are actually called and not just defined
- Learned how to use empty variables to store user data that has been input
- Learned how to generate a random index
- Learned how to concatenate arrays
- Learned how to user a for loop to iterate a desired number of times
- Learned how to use while loops

## Author Info

Matthew Gibson

- [Portfolio](https://github.com/ohSweetWampum)
- [LinkedIn](https://www.linkedin.com/in/matthew-gibson-6b9b12237/)
- [Github](https://github.com/ohSweetWampum)

## Credits

[meyerweb.com](https://meyerweb.com/eric/tools/css/reset/)
(For my reset.css file)

[w3schools.com](https://www.w3schools.com/js/js_array_methods.asp)
(array methods)

[w3schools.com](https://www.w3schools.com/js/js_if_else.asp)
(else if statements)

[w3schools.com](https://www.w3schools.com/js/js_loop_while.asp)
(while loops)

[developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
(math.random())

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

```

```
