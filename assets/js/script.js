
const passwordText = document.querySelector('#password');
const generateBtn = document.querySelector('#generate');

let userChoice = [];

const alphaLowers = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const alphaUppers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const numericChars = ["0","1","2","3","4","5","6","7","8","9"];
const specialChars = ["!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~",];

let check = {
  lowers: false,
  uppers: false,
  numbers: false,
  special: false
};

function generatePassword() {
  
// Get password length
  let userLength = checkLength();

// Confirm that it meets requirements
  

// Character set inclusion prompts
  promptCharacters();

  console.log(check);

  if (userChoice === "") {
    choiceErr = "Please choose at least one character type to include.";
    return choiceErr;
  } else {
    let choices = userChoice.join('');
    console.log(userChoice);
    randomPass = randomArrayLooper(choices, userLength);
    return randomPass;
  };

//   return "'W.I.P'\n'Work in Progress'\nby Cardi B and Megan Thee Stallion";
};

// random looper function takes
// x - array to loop through
// y - length of users passord choice, or length of individual array

function checkLength() {

  let userLength = window.prompt("Choose a Password length between 8 and 128 characters.", "8 - 128");

// 0 is entered

  if (userLength == 0) {
    let zeroErr = "William Corgan is a Zero, \nbut your password shouldn't be.\n\nTry again.";
    return zeroErr;
  };

// negative number is entered

  if (userLength < 0) {
    let negativeErr = "Why so negative?\nA password can not be created from thin air!\nTry again.";
    return negativeErr;
  };
  
// Confirm length conforms to parameter limits

  if (userLength < 8 || userLength > 128) {
    let rangeErr = "Please choose a length between 8 and 128 characters.";
    return rangeErr;
  } else {
    window.alert("Password Length of " + userLength + " Selected ✔️");
    return userLength;
  };
}

function promptCharacters() {

  const lowers = window.confirm("use lowercase letters?");

  if (lowers) {
    lowerConfirm();
  } else {
    window.alert("lowercase letters not included ❌");
  };

  const uppers = window.confirm("USE UPPERCASE LETTERS?");

  if (uppers) {
    upperConfirm();
  } else {
    window.alert("UPPERCASE LETTERS NOT INCLUDED ❌");
  };

  const num = window.confirm("Use Numeric Values 0 - 9?");

  if (num) {
    numConfirm();
  } else {
    window.alert(numericChars.toString() + " Not Included ❌");
  };
  
  const spec = window.confirm("Use Special characters?");
  
  if (spec) {
    specConfirm();
  } else {
    window.alert(specialChars.join('') + " Not Included ❌")
  };
};

const randomArrayLooper = function(x,y) {
  let solution = "";
  for (i = 0; i < y; i++) {
    let random = Math.floor(Math.random() * x.length);
    let char = x[random];
    solution += char;
  }
  return solution;
};

function resetValues() {
  check.lowers = false;
  check.uppers = false;
  check.numbers = false;
  check.special = false;
  userChoice = [];
  writePassword();
};

function lowerConfirm() {
  userChoice = userChoice.concat(alphaLowers);
  check.lowers = true;
  window.alert("lowercase letters included ✔️");
};

function upperConfirm() {
  userChoice = userChoice.concat(alphaUppers);
  check.uppers = true;
  window.alert("UPPERCASE LETTERS INCLUDED ✔️");
};

function numConfirm() {
  userChoice = userChoice.concat(numericChars);
  check.numbers = true;
  window.alert(numericChars.join('') + " Included ✔️");
};

function specConfirm() {
  userChoice = userChoice.concat(specialChars);
  check.special = true;
  window.alert(specialChars.join('').toString + " Included ✔️");
}

function containsCheck(input) {
  for (i = 0; i < input.length; i++) {
    for (j = 0; j < input[i].length; j++) {
      
    }
  }
};

function writePassword() {
  const password = generatePassword();
  passwordText.value = password;
};

generateBtn.addEventListener('click', resetValues);


// console.log(userChoice = [...alphaLowers,...alphaUppers,...numericChars,...specialChars]);
// console.log(specialChars.join(''));
// console.log(randomArrayLooper(userChoice,30));