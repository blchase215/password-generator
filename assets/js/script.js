// Assignment Code
var generateBtn = document.querySelector('#generate');

function generatePassword() {
  var password = 'password';
  // TODO: add code to generate the password here

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


// psuedocode
var alphaLowers = "abcdefghijklmnopqrstuvwxyz";
var alphaUppers = alphaLowers.toUpperCase();
var numeric = "0123456789";
console.log (alphaLowers.length);
console.log (alphaUppers.length);
console.log(alphaLowers);
console.log (alphaUppers);


var checkLoop = function (set) {
  for (i = 0; i < set.length; i++) {
    console.log(set[i]);
  };
};
var checkRandomLoop = function (set) {
  for (i = 0; i < set.length; i++) {
    var randomPick = Math.floor(Math.random() * set.length);
    console.log(randomPick);
  };
  console.log(randomPick.length);
  return randomPick;
};
// checkLoop(alphaUppers); proof of concept for iteration
checkRandomLoop(numeric);



// select criteria

// user clicks button
// prompt with password criteria
// display choices in #password element, separated by comma
// true choices display charSet name
// false choices display "X"
    // prompt "Include lowercase?"
      // store value in choiceVar
      // update #password element wha
      // return next prompt
    // prompt "Include UPPERCASE?"
      // store value in choiceVar
      // update #password element
      // return next prompt
    // prompt "Include 0123456789?"
      // store value in choiceVar
      // update #password element
      // return next prompt
    // prompt "Include Special Characters"
      // store value in choiceVar
      // update #password element
      // return final confirmation prompt
      // or return to start with noChoice alert message
// replace #password element text area with securePass
      
// when a choice is made
// then the next criteria prompt happens
// and the choice is stored and validated
// when final choice is made
// then check if any choice was "true"
// if user made no choices 
// then alert with warning
// can not generate password from thin air
// else if user made choices that were true
// prompt "generate with choicesVar?"
// if user chooses "false"
// then return to start
// if user chooses true
// then generate password

// algorithm
// 
// add string variabit
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 



