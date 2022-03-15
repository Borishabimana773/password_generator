// Assignment code here
var lowerArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","z"]
var upperArray = ["A","B","C","D","E","F","G","H","I","J","K",'l',"M","N","O","P","Q","R","S","T","U","V","W","X","Z"]
var numbersArray = [0,1,2,3,4,5,6,7,8,9]
var specialcharacterArray = ["!","@","#","$","_","*"," ","?"]
var totalArray = []
var resultArray = []

function generatePassword() {
  //set password length/complexity 
  var passLength = parseInt(window.prompt("How long would you like your password"));
  console.log(passLength);
  var yesLower = window.confirm("would you like lowercase letters?")
  var yesUpper = window.confirm("would you like uppercase letter?")
  var yesNumbers = window.confirm("would you like numbers?")
  var yesSpecialcharacter = window.confirm("would you like special character?")
  //console.group(yesLower,yesUpper,yesNumbers,yesSpecialcharacter);
  if (yesLower === true){
    totalArray = totalArray.concat(lowerArray)
  }
  if (yesUpper === true){
    totalArray = totalArray.concat(upperArray)
  }
  if (yesNumbers === true){
    totalArray = totalArray.concat(numbersArray)
  }
  if (yesSpecialcharacter === true) {
    totalArray = totalArray.concat(specialcharacterArray)
  }
  //console.log(totalArray);
 for(var i=0 ; i<passLength; i++){
   var index = Math.floor(Math.random()*totalArray.length);
   var digit = totalArray[index];
   resultArray.push(digit);
   console.log(resultArray);
   
 }
  return resultArray.join("");

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
