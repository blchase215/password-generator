// Assignment Code

var userChoice = "";
var alphaLowers = "abcdefghijklmnopqrstuvwxyz";
var alphaUppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var specChar = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

var generateBtn = document.querySelector('#generate');

function generatePassword() {


// User chooses password length...
  
  var userLength = window.prompt("Choose a Password length between 8 and 128 characters.", "8 - 128");
  
// 0 is entered

  if (userLength == 0) {
    zeroErr = "William Corgan is a Zero, \nbut your password shouldn't be.\n\nTry again.";
    return zeroErr;
  };

  if (userLength < 0) {
    negativeErr = "Why so negative?\nA password can not be created from thin air!\nTry again.";
    return negativeErr;
  };
  
// Confirm length conforms to parameter limits

  if (userLength < 8 || userLength > 128) {
    rangeErr = "Please choose a length between 8 and 128 characters.";
    return rangeErr;
  };

// Character set inclusion prompts
  
  const lowers = window.confirm("Use 'lowercase' letters?");
  const uppers = window.confirm("USE 'UPPERCASE' LETTERS?");
  const num = window.confirm("Use Numerical values 0 - 9?");
  const spec = window.confirm("Use Special characters?");
  
// remove if false

  if (lowers) {
    userChoice += alphaLowers;
  }; 
  console.log(userChoice);
  if (uppers) {
    userChoice += alphaUppers;
  };
  console.log(userChoice);
  if (spec) {
    userChoice += specChar;
  };
  console.log(userChoice);
  if (num) {
    userChoice += numeric;
  };
  console.log(userChoice);
  // if (num) {
  //   userChoice = userChoice.concat(numeric);
  // };
  // console.log(userChoice);
  // if (lowers) {
  //   userChoice = userChoice.concat(alphaLowers);
  // }; 
  // console.log(userChoice);
  // if (uppers) {
  //   userChoice = userChoice.concat(alphaUppers);
  // };
  // console.log(userChoice);
  // if (spec) {
  //   userChoice = userChoice.concat(specChar);
  // };
  // console.log(userChoice);

  if (userChoice === "") {
    password = "Please choose at least one character type to include.";
    return password;
  };
  return "'W.I.P'\n'Work in Progress'\nby Cardi B and Megan Thee Stallion";
};



// check if any character sets were selected

//   if (notChosen.length === 4) {
//     password = "Please choose at least one character type to include.";
//     notChosen = [];
//     return password;
//   } else {
//     var passwordPool = ""
//     for (i = 0; i < choiceVar.length; i++) {
//       passwordPool += choiceVar[i];
//       return passwordPool;
//     };
//     console.log(passwordPool);
//   };
  
//   return "'W.I.P'\n'Work in Progress'\nby Cardi B and Megan Thee Stallion";
// };

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
};

// Add event listener to generate button
// function clearBox() {
//   var passBox = document.querySelector('#password');
//   passBox.value = "Generating...";
//   writePassword();
// };

// generateBtn.addEventListener('click', clearBox);
generateBtn.addEventListener('click', writePassword);



// pseudocode


// console.log(alphaLowers.length);
// console.log(alphaUppers.length);
// console.log(numeric.length);
// console.log(specChar.length);
// console.log(alphaLowers);
// console.log(alphaUppers);
// console.log(numeric);
// console.log(specChar);

// loop to test string iteration
// var checkLoop = function (set) {
//   for (i = 0; i < set.length; i++) {
//     console.log(set[i]);
//   };
// };

// test for random choice iteration
// var checkRandomLoop = function (list) {
//   var randomPick = Math.floor(Math.random() * list.length);
//   for (i = 0; i < list.length; i++) {
    
//   };
//   console.log(randomPick.length);
//   return randomPick;
// };
// checkLoop(alphaUppers);    //proof of concept for iteration
// checkRandomLoop(numeric);  //proof of concept for random iteration 



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
// choiceVar is an array
// add string variable 
// of each choice to choiceVar
// iterate through with:

// var randomChoiceLoop = function (set) {
//   for (i = 0; i < passLength; i++) {
//     var randomPick = Math.floor(Math.random() * set.length);
//   };
// }; 
// 
// no character set options chosen message
//
// if (password.length === 0) {
//    alert("A password can not be created from thin air!  Please choose at least one type of character to include.");
//    return "";
// }
// 
// 
// 
// 
// 
// 
// 



