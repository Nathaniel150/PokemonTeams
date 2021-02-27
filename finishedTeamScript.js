var sessionString = sessionStorage.getItem('pokemonArray');
var pokemonTeam = JSON.parse(sessionString);

var sessionString2 = sessionStorage.getItem('movesArray');
var movesArray = JSON.parse(sessionString2);


console.log("pokemonTeam: " + pokemonTeam);
console.log("moves Array: " + movesArray);


for (let i = 0; i < pokemonTeam.length; i++) {

  let id = "profile" + i;
  document.getElementById(id).src = pokemonTeam[i].sprites.front_default;

  let id2 = "desc" + i;
  console.log(movesArray);

  let results = "<h2>Moves:</h2><ol>";
  let results2= "Your " + pokemonTeam[i].name + " has the moves ";


  for (let j = 0; j < 4; j++){
    let move =  movesArray[i][0][j];
    results2 += "<br/>" + (j+1) + "." + move ;
  }
  for (let j = 0; j < 4; j++){
    let move =  movesArray[i][0][j];
    results += "<li>" + move + "</li>";
  }
  results += "</ol>";



  document.getElementById(id2).innerHTML = results2;
  //console.log(JSON.stringify(movesArray[i]));


}
