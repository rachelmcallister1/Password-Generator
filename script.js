// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.',];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];

var possibileCharacters = [];
function randomize(values) {
  let index = values.length,
    randomIndex;
  // While there remain elements to shuffle.
  while (index != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * index);
    index--;
    // And swap it with the current element.
    [values[index], values[randomIndex]] = [values[randomIndex], values[index]];
  }
  return values;
}
// Write password to the #password input
function generatePassword() {
  // This section is for checking character lengths (minumum and maximum)
  var characterLength = prompt("How many characters?");
  // Add if else statement to indicate minumum and maxiumum characters to include
  if (characterLength < 8 || characterLength > 128) {
    alert ("Character length outside of boundaries")
    return "error";
  } 
  // This section is for character types/checking character types
  var includesLowercase = confirm("Do you want to include lowercase characters?");
  var includesUppercase = confirm("Do you want to include uppercase characters?");
  var includesNumbers = confirm("Do you want to include numbers?");
  var includesSpecialCharacters = confirm("Do you want to include special characters?");
  // where data is stored 
  var userInputs = {
  includesLowercase,
  includesUppercase,
  includesSpecialCharacters,
  includesNumbers
  }
  
  if (userInputs.includesLowercase === true) {
    possibileCharacters = possibileCharacters.concat(lowerCasedCharacters)
  }
  if (userInputs.includesUppercase === true) {
    possibileCharacters = possibileCharacters.concat(upperCasedCharacters)
  }
  if (userInputs.includesSpecialCharacters === true) {
    possibileCharacters = possibileCharacters.concat(specialCharacters)
  }
  if (userInputs.includesNumbers === true) {
    possibileCharacters = possibileCharacters.concat(numericCharacters)
  }
  var randomizeArray = randomize(possibileCharacters);

  //join puts the arrays together in a string
return randomizeArray.slice(0,Number(characterLength)).join("")
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 

  passwordText.value = password;

}

  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// ask about readme ignore