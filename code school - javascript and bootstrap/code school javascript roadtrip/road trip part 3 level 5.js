Array.prototype.countCattle = function ( kind ){
  var numKind = 0;
  for(var i = 0; i<this.length; i++){
    if(this[i].type == kind){
      numKind++;
    }
  }
  return numKind;
};


Array.prototype.countCattle = function ( kind ){
  var numKind = 0;
  for(var i = 0; i<this.length; i++){
    if(this[i].type == kind){
      numKind++;
    }
  }
  return numKind;
  
};
alert(canyonCows.countCattle("calf") +
valleyCows.countCattle("bull") +
forestCows.countCattle("cow"));


Object.prototype.noCalvesYet = function () {
  if(this.type == "cow" && this.hadCalf == null){
    return true;
  }
  return false;
};
Array.prototype.countForBreeding = function(){
  var numToBreed = 0;
  for(var i = 0; i<this.length; i++){
    if(this[i].noCalvesYet()){
      numToBreed++;
    }
  }
  return numToBreed;
};


Object.prototype.noCalvesYet = function () {
  if(this.type == "cow" && this.hadCalf == null){
    return true;
  }
  return false;
};
Array.prototype.countForBreeding = function(){
  var numToBreed = 0;
  for(var i = 0; i< this.length; i++){
    if(this[i].noCalvesYet()){
      numToBreed++;
    }
  }
  return numToBreed;
};

var numPriorityCows = canyonCows.countForBreeding()+ 
									valleyCows.countForBreeding()+ 
 									forestCows.countForBreeding()+ 
									badlandsCows.countForBreeding(); 
alert ("Herd-merger has indicated " + numPriorityCows + " cows of top breeding priority.");


var genericPost =
  {x: 0, y: 0, postNum: undefined,
   connectionsTo: undefined,
   sendRopeTo: function ( connectedPost ) {
     if(this.connectionsTo == undefined){
       var postArray = [ ];
       postArray.push(connectedPost);
       this.connectionsTo = postArray;
     } else {
       this.connectionsTo.push(connectedPost);
     }
   }
  };


  var genericPost = {
  x: 0, 
  y: 0, 
  postNum: undefined, 
  connectionsTo: undefined,
  sendRopeTo: function ( connectedPost ) {
    if(this.connectionsTo == undefined){
      var postArray = [ ];
      postArray.push(connectedPost);
      this.connectionsTo = postArray;
    } else {
      this.connectionsTo.push(connectedPost);
    }
  }
};

var post8 = Object.create(genericPost);
var post9 = Object.create(genericPost);
var post10 = Object.create(genericPost);

post8.x = 0;
post8.y = -3;
post8.postNum = 8;
post9.x = 6;
post9.y = 8;
post9.postNum = 9;
post10.x = -2;
post10.y = 3;
post10.postNum = 10;
post8.sendRopeTo(post10);
post9.sendRopeTo(post10);
post10.sendRopeTo(post8);
post10.sendRopeTo(post9);
post9.numBirds = 0;
post8.lightsOn = false;
post10.weathervane = N;
post10.lightsOn = false;

function Fencepost(x,y,postNum){
  this.x = x;
  this.y = y;
  this.postNum = postNum;
  this.connectionsTo = [];
  this.sendRopeTo = function sendRopeTo(connectedPost) {   
       this.connectionsTo.push(connectedPost);
	};
}


function Fencepost (x, y, postNum){
  this.x = x;
  this.y = y;
  this.postNum = postNum;
  this.connectionsTo = [];
  this.sendRopeTo = function ( connectedPost ){
    this.connectionsTo.push(connectedPost);
  };
}

var post18 = new Fencepost(-3,4,18); 
var post19 = new Fencepost(5,-1,19); 
var post20 = new Fencepost(-2,10,20); 
post18.sendRopeTo(post20);
post20.sendRopeTo(post18);
post18.sendRopeTo(post19);
post19.sendRopeTo(post18);


function Fencepost (x, y, postNum){
  this.x = x;
  this.y = y;
  this.postNum = postNum;
  this.connectionsTo = [];
}
Fencepost.prototype = {
  sendRopeTo: function ( connectedPost ){
    this.connectionsTo.push(connectedPost);
  },
  removeRope: function ( removeTo ){
    var temp = [];
    for(var i = 0; i<this.connectionsTo.length; i++){
      if(this.connectionsTo[i].postNum != removeTo){
        temp.push(this.connectionsTo[i]);
      }
    }
    this.connectionsTo = temp;
  },
  movePost: function (x, y){
    this.x = x;
    this.y = y;
  }
};


Fencepost.prototype.valueOf = function (){
  return Math.sqrt( this.x*this.x + this.y*this.y );
};



function Fencepost (x, y, postNum){
  this.x = x;
  this.y = y;
  this.postNum = postNum;
  this.connectionsTo = [];
}
Fencepost.prototype = {
  sendRopeTo: function ( connectedPost ){
    this.connectionsTo.push(connectedPost);
  },
  removeRope: function ( removeTo ){
    var temp = [];
    for(var i = 0; i<this.connectionsTo.length; i++){
      if(this.connectionsTo[i].postNum != removeTo){
        temp.push(this.connectionsTo[i]);
      }
    }
    this.connectionsTo = temp;
  },
  movePost: function (x, y){
    this.x = x;
    this.y = y;
  },
  valueOf: function (){
  return Math.sqrt( this.x*this.x + this.y*this.y );
  }
};
Fencepost.prototype.toString = function(){
  var list = "";
  for(var i = 0; i < this.connectionsTo.length; i++){
    list += this.connectionsTo[i].postNum + "\n";
  }
  return "Fence post #" + this.postNum + ":\n" +
         "Connected to posts:\n" + list +
         "Distance from ranch: " + this.valueOf() + " yards";
};