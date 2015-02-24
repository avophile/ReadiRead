function warningMaker( obstacle ){
  var count = 0;
  var zones = [];
  return function ( number, location ) {
    count++;
    zones.push(location);
    var list = "";
    {
       list = list + "\n" + zones[i] + " (" + number +")\n"; 
    }
    alert("Beware! There have been " +
          obstacle +
          " sightings in the Cove today!\n" +
          number +
          " " +
          obstacle +
          "(s) spotted at the " +
          location +
          "!\n" +
          "This is Alert #" +
          count +
          " today for " +
          obstacle +
          " danger.\n" +
          "Current danger zones are:" +
          list
         );
  };
}


function makeTargetAssigner( sharks, targets ){
      return function (shark) { 
        for (var i = 0; i <sharks.length; i ++){
          if (shark == sharks[i]) {
              alert("What up, " + shark + "!\n" + "There've been " + targets [i] + " sightings in our 'hood!\n" + "Time for a swim-by lasering, homie!");
    }
  }
};
}


var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];
var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 3,
  ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
  ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
  ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1}
};

function dontPanic (location) {
  alert ("Avast, me hearties!\n There be Pirates nearby! Stations! \n")
  for(var i = 0; i<numRangers; i++) {
      ranger = "ranger" + numRanger;
      alert (location.ranger.name", man the "lighthouseRock.weaponsBulbs[location.ranger.station]"!\n");
  }
}
dontPanic(lighthouseRock);



var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];
var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 3,
  ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
  ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
  ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1}, 
  ranger4: {name: "Jordan Wade", skillz: "dual-wield hand crossbow", station: 4},
  addRanger: function (name, skillz, station){
    this.numRangers++;
    this["ranger" + this.numRangers] = {
      name: name, 
      skillz: skillz, 
      station: station 
    }; 
  }
};
lighthouseRock.addBulb = function (name, wattage){
  this.weaponBulbs.push([name, wattage]);
};