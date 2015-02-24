
var vehicle1 = {type: "Motorboat", capacity: 6, storedAt: "Ammunition Depot"};
var vehicle2 = {type: "Jet Ski", capacity: 1, storedAt: "Reef Dock"};
var vehicle3 = {type: "Submarine", capacity: 8, storedAt: "Underwater Outpost"};
var vehicles = [vehicle1,vehicle2,vehicle3];
var findVehicle = function (name,list){
				for (var i = 0; i <list.length; i++){
          	if (list[i].type == name) {
          		return list[i].storedAt;
              }
          }
};
  findVehicle("Submarine", vehicles);


  var superBlinders = [ ["Firelight", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];
var lighthouseRock = {
  gateClosed: true,
  bulbs: [ 200, 500, 750 ],
  capacity: 30,
  secretPassageTo: "Underwater Outpost"
};
delete lighthouseRock.bulbs;
lighthouseRock.weaponBulbs = superBlinders;
console.log(lighthouseRock.weaponBulbs[2][0]);



var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];
var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 0
};
function addRanger (location, name, skillz, station) {
	location.numRangers++;
  location["ranger" + location.numRangers]={
  name: name,
  skillz: skillz,
  station: station
};
addRanger("lighthouseRock","Nick Walsh","magnification burn",2);
addRanger("lighthouseRock","Drew Barontini","uppercut launch",3);
addRanger("lighthouseRock","Christine Wong","bomb defusing",1);


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
lighthouseRock.addBulb("Blasterbright", 5000);
lighthouseRock.addBulb("Sight Slayer", 1800);
lighthouseRock.addBulb("Burner of Souls", 7500);



var vehicle3 = {
  type: "Submarine", capacity: 8, storedAt: "Underwater Outpost",
  ranger1: { name: "Gregg Pollack", skillz: "Lasering", dayOff: "Friday"},
  ranger2: { name: "Bijan Boustani", skillz: "Roundhouse Kicks", dayOff: "Tuesday"},
  ranger3: { name: "Ashley Smith", skillz: "Torpedoing", dayOff: "Friday"},
  ranger4: { name: "Mark Krupinski", skillz: "Sniping", dayOff: "Wednesday"},
  numRangers: 4
};
function relieveDuty (vehicle, day){
  var offDuty = [ ];
  var onDuty = [ ];
  for(var i = 1; i<=vehicle["numRangers"]; i++){
    if(vehicle["ranger" + i]["dayOff"] == day){
      offDuty.push(vehicle["ranger" + i]);
    }
    else{
      onDuty.push(vehicle["ranger" + i]);
    }
    delete vehicle["ranger" + i];
  }
  vehicle.numRangers -= offDuty.length;
  for(var j = 1; j<=vehicle["numRangers"]; j++){
    vehicle["ranger" + j] = onDuty.shift();
  }
  return offDuty;
}
var offToday = relieveDuty(vehicle3, "Friday");


var rockSpearguns = {
  Sharpshooter: {barbs: 2, weight: 10, heft: "overhand"},
  Pokepistol: {barbs: 4, weight: 8, heft: "shoulder"},
  Javelinjet: {barbs: 4, weight: 12, heft: "waist"},
  Firefork: {barbs: 6, weight: 8, heft: "overhand"},
  "The Impaler": {barbs: 1, weight: 30, heft: "chest"}
};
function listGuns (guns){
  for (var speargun in guns) {
  console.log(speargun);
  }
}
listGuns(speargun);



var rockSpearguns = {
  Sharpshooter: {barbs: 2, weight: 10, heft: "overhand"},
  Pokepistol: {barbs: 4, weight: 8, heft: "shoulder"},
  Javelinjet: {barbs: 4, weight: 12, heft: "waist"},
  Firefork: {barbs: 6, weight: 8, heft: "overhand"},
  "The Impaler": {barbs: 1, weight: 30, heft: "chest"}
};
function listGuns (guns){
  for(var speargun in guns){
    console.log("Behold! " + speargun +
                ", with " + guns[speargun]["heft"] +
                " heft!");
  }
}
listGuns(rockSpearguns);


var rockSpearguns = {
  Sharpshooter: {barbs: 2, weight: 10, heft: "overhand"},
  Pokepistol: {barbs: 4, weight: 8, heft: "shoulder"},
  Javelinjet: {barbs: 4, weight: 12, heft: "waist"},
  Firefork: {barbs: 6, weight: 8, heft: "overhand"},
  "The Impaler": {barbs: 1, weight: 30, heft: "chest"}
};
rockSpearguns["listGuns"] = function ( ){
  for(var property in this){
    if(this[property]["heft"] != undefined){
      console.log("Behold! " + property +
                  ", with " + this[property]["heft"] +
                  " heft!");
    }
  }
};
rockSpearguns["listGuns"]();