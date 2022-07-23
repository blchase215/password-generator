// Assignment Code
var generateBtn = document.querySelector('#generate');

function generatePassword() {
  
  var password = '';
  var alphaLowers = "abcdefghijklmnopqrstuvwxyz";
  var alphaUppers = alphaLowers.toUpperCase();
  var numeric = "0123456789";
  var specChar = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  
  // array of character sets
  // undesired character sets 
  var choiceVar = [alphaLowers, alphaUppers, numeric, specChar];

  // store value of unwanted characters
  var notChosen = [];
  
// User chooses password length...
  
  var userLength = window.prompt("Choose a Password length between 8 and 128 characters.", "8 - 128");
  
// 0 is entered

  if (userLength == 0) {
    password = "William Corgan is a Zero, \nbut your password shouldn't be.\nTry again.";
    return password;
  };

  if (userLength < 0) {
    password = "A password can not be created from thin air!\nTry again.";
    return password;
  };
  
// Confirm length conforms to parameter limits

  if (userLength < 8 || userLength > 128) {
    password = "Please choose a length between 8 and 128 characters.";
    return password;
  };

// Character set inclusion prompts
  
  var lowers = window.prompt("Use 'lowercase' letters?");
  var UPPERS = window.prompt("USE 'UPPERCASE' LETTERS?");
  var num = window.prompt("Use Numerical values 0 - 9?");
  var spec = window.prompt(" !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~");
  
// remove if false

  if (!lowers) {
     var not = choiceVar.shift();
     notChosen.push(not);
  }; 

  if (!UPPERS) {
     var not = choiceVar.shift();
     notChosen.push(not);
  };

  if (!num) {
     var not = choiceVar.shift();
     notChosen.push(not);
  } 
  if (!spec) {
     var not = choiceVar.shift();
     notChosen.push(not);
  }; 

console.log(notChosen);

  if (notChosen.length === 4) {
    password = "Please choose at least one type of character to include.";
    return password;
  } else {
    
  };
  return "'W.I.P'\n'Work in Progress'\nby Cardi B and Megan Thee Stallion";
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
function clearBox() {
  var passBox = document.querySelector('#password');
  passBox.value = "Generating...";
};

generateBtn.addEventListener('click', clearBox);
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
var checkLoop = function (set) {
  for (i = 0; i < set.length; i++) {
    console.log(set[i]);
  };
};

// test for random choice iteration
var checkRandomLoop = function (list) {
  var randomPick = Math.floor(Math.random() * list.length);
  for (i = 0; i < list.length; i++) {
    
  };
  console.log(randomPick.length);
  return randomPick;
};
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



