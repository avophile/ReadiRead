var list = [1, 2, 3, 7, 5, 6, 7, 8, 9];

list[3] = 4;

list.push(10);




var movie1 = [16, "Candles"];
var movie2 = [3, "Men", "and", "a", "Baby"];
var eightiesMovies = [movie1, movie2];

var infant = eightiesMovies[1][4];

alert(eightiesMovies[0][0] + " " + eightiesMovies[0][1]);



function numStrings(list) {
  var count = 0;
  for (var i = 0; i < list.length; i++){
    if( typeof list[i] == "string" ){
      count++;
    }
  }
  return count;
}
