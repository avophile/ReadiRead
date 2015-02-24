function multiplyTrio(a, b, c){
  return a*b*c;
}

multiplyTrio(4, 8, 10);


function maxOf2 (a, b) {
  if (a>=b){
    return a;
  } else {
    return b;
  }
}


function mystery (x, y) {
  var a = 4*x*y;
  var b = 3*y + 5;
  var c = a + b;
  return c;
}


function mystery (x, y){
  return 4*x*y + 3*y + 5
}

function feedPerRanger (population, rangers) {
  var feedPerRanger = (population * 2) / rangers;
  alert("Each Park Ranger should load " + feedPerRanger + " lbs of feed today.");
  return;
}

function changePowerTotal (total, ID, status, power) {
  if(status == "on"){
    total += power;
    alert("Generator #" + ID + " is now on, adding " + power + " MW, for a total of " + total + " MW!");
  } else if (status == "off"){
    total -= power;
    alert("Generator #" + ID + " is now off, removing " + power + " MW, for a total of " + total + " MW!");
  }
  return total;
}