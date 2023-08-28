let userChoice = [];
const alphaLowers = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const alphaUppers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const numericChars = ["0","1","2","3","4","5","6","7","8","9"];
const specialChars = ["!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~",];

var generateBtn = document.querySelector('#generate');

function generatePassword() {

// User chooses password length...
  
  const userLength = window.prompt("Choose a Password length between 8 and 128 characters.", "8 - 128");
  
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
    userChoice.concat(alphaLowers);
  }; 

  if (uppers) {
    userChoice.concat(alphaUppers);
  };

  if (spec) {
    userChoice.concat(spec);
  };

  if (num) {
    userChoice.concat(num);
  };

  if (userChoice === "") {
    password = "Please choose at least one character type to include.";
    return password;
  };

  password = randomArrayLooper(userChoice, userLength).join('');
  return password;
//   return "'W.I.P'\n'Work in Progress'\nby Cardi B and Megan Thee Stallion";
};

// random looper function takes
// x - array to loop through
// y - length of users passord choice, or length of individual array

const randomArrayLooper = function(x,y) {
    let solution = [];
    
    for (i = 0; i < y; i++) {
        solution = solution.concat( x[ Math.floor( Math.random() * x.length ) ] );
    }
    return solution;
}

function writePassword() {
    const password = generatePassword();
    const passwordText = document.querySelector('#password');
  
    passwordText.value = password;
};


// console.log(userChoice = [...alphaLowers,...alphaUppers,...numericChars,...specialChars]);
// console.log(specialChars.join(''));
// console.log(randomArrayLooper(userChoice,30));