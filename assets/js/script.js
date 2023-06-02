var userChoice = [];
var alphaLowers = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var alphaUppers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numericChars = ["0","1","2","3","4","5","6","7","8","9"];
var specialChars = [" ","!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~",];

// looper function takes
// x - array to loop through
// y - length of users passord choice, or length of individual array

const arrayLooper = function(x,y) {
    solution = [];
    
    for (i = 0; i < y; i++) {
        solution.push( x[ Math.floor( Math.random() * x.length ) ] );
    }
    return solution;
}

console.log(arrayLooper(alphaLowers,20));
console.log(arrayLooper(alphaUppers,20));
console.log(arrayLooper(numericChars,20));
console.log(arrayLooper(specialChars,20));