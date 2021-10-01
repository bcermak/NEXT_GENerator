// Assignment Code
let generateBtn = document.querySelector("#generate");

let meow = new Audio('assets/meow.mp3');
let growl = new Audio('assets/growl.mp3');


// Write password to the #password input
function writePassword() {
  meow.play();
  let lengthQ = prompt("How long would you like your password to be?");
 
  if (lengthQ < 8 || lengthQ > 128  ) {
    growl.play();
    alert("Not in required length range!");
  } else {
    let lowerQ = prompt("Would you like to use lowercase characters? (Y/N)");
    let upperQ = prompt("How about uppercase? (Y/N)");
    let specQ = prompt("Do you want your characters to be 'special' (Y/N)?")
    console.log(lengthQ, lowerQ, upperQ, specQ)
  }

  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
