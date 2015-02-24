var runAway = function () {
  var toAlert = "";
  for(var i = 0; i < 5; i++) {
    toAlert = toAlert + "Lions, Tigers, and Bears, Oh My!!\n";
  }
  alert(toAlert);
};




var people = 5;
var rain = 6;
var sharks = 6;
var fearGenerated = function ( numPeeps, rainInInches, numSharks) {
  var rainFear = numPeeps * rainInInches;
  var sharkFear = numSharks * numSharks * numSharks;
  var totalFear = sharkFear + rainFear;
  return totalFear;
};
var fear = fearGenerated(people, rain, sharks);
//Generates 5*6 + 6^3 = 246 FEAR. AGGGGH!!

alert(fearGenerated);

var fear = fearGenerated(numPeeps, rainInInches, numSharks);

var fearMessage = function () {
  // Insert conditional statements here
  if (fear < 200) {
    return confirm("Fear Level: LOW\nStill wanna ride?");
  } else if (fear >= 200 && fear <= 300) {
    return confirm("Fear Level: MEDIUM\nThink you'll make it?");
  } else {
    return confirm("Fear Level: HIGH\nHave a death wish?");
  }
};

function confirmRide(confirmToGo){
  return confirmToGo();
}

// Call confirmRide here
var startRide = confirmRide(fearMessage);







var passengers = [ ["Thomas", "Meeks"],
                   ["Gregg", "Pollack"],
                   ["Christine", "Wong"],
                   ["Dan", "McGaw"] ];
var modifiedNames = passengers.map(function (firstAndLast) {
  return firstAndLast[0] + " " + firstAndLast[1];
});

var modifiedNames = [ "Thomas Meeks",
                      "Gregg Pollack",
                      "Christine Wong",
                      "Dan McGaw" ];
modifiedNames.map( function (name) {
  alert("Yo, " + name + "!");
});





var puzzlers = [
  function ( a ) { return 3*a - 8; },
  function ( a ) { return (a+2) * (a+2) * (a+2); },
  function ( a ) { return a * a - 9; },
  function ( a ) { return a % 4; }
];






function adventureSelector(userChoice) {
  if (userChoice == 1) {
    return function () {
      alert("You selected the Vines of Doom!");
    };
  } else if (userChoice == 2) {
    return function () {
      alert("Looks like you want the Lake of Despair!");
    };
  } else if (userChoice == 3) {
    return function () {
      alert("The Caves of Catastrophe!");
    };
  }
}


adventureSelector(3)();



var puzzlers = [
  function (a) { return 8*a - 10; },
  function (a) { return (a-3) * (a-3) * (a-3); },
  function (a) { return a * a + 4; },
  function (a) { return a % 5; }
];
var start = 2;

var applyAndEmpty = function (input, queue){
  var length = queue.length;
  for(var i = 0; i <length; i++) {
input = queue.shift() (input);
        }
return input;
};
alert (applyAndEmpty(start, puzzlers));





