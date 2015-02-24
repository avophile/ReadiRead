var parkIsOpen = false;
if(parkIsOpen){
  alert("Welcome to the Badlands National Park! Try to enjoy your stay.");
} else {
  alert("Sorry, the Badlands are particularly bad today. We're closed!");
}


var userAge = prompt("What's your age, user?");
var ageIsCorrect = confirm("You entered " + userAge + ". Is this correct?");



var userAge = prompt("What's your age user?");
var ageIsCorrect = false;
while (ageIsCorrect == false){
  if (confirm("You entered " + userAge + ". Is this correct?")) {
    ageIsCorrect = true;
    alert("Great! Your age is logged as " + userAge + ".");
  } else {
    userAge = prompt("What's your age, user?");
  }
}
