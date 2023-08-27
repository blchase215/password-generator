let userChoice = "";
const alphaLowers = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const alphaUppers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const numericChars = ["0","1","2","3","4","5","6","7","8","9"];
const specialChars = [" ","!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~",];

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

console.log(userChoice = [...alphaLowers,...alphaUppers,...numericChars,...specialChars]);
console.log(randomArrayLooper(userChoice,30));