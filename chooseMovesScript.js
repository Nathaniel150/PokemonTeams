var sessionString = sessionStorage.getItem('pokemonArray');
var pokemonTeam = JSON.parse(sessionString);
console.log(pokemonTeam);



for(let i = 0; i < pokemonTeam.length; i++) {
  const newId = "choosePokemon" + i;
  console.log(newId);
  console.log(pokemonTeam[i]);
  document.getElementById(newId).src = pokemonTeam[i].sprites.front_default;
}



let selectorIndex = 0;

for (let k = 0; k < pokemonTeam.length; k++) {
  let results = "";

  for (let i = 0; i < 4; i++) {

    results += "<br/><select id='selector" + selectorIndex + "'>";
    for (let j = 0; j < pokemonTeam[k].moves.length; j++) {
      results += "<option value =\'" + pokemonTeam[k].moves[j].move.name + "\'>" +pokemonTeam[k].moves[j].move.name + "</option>";
    }
    results += "</select>";
    selectorIndex++;
  }
//console.log(results);
newId = "pokemon" + k;
document.getElementById(newId).innerHTML = results;
}

let movesArray = [];

document.getElementById("submitMoves").addEventListener("click", function(event) {
  let individualMoves = [];
  for (let i = 0; i < selectorIndex; i++) {

      if(i%4 ==0 && i != 0){
        movesArray.push([individualMoves]);
        individualMoves = [];
      }

      let id = "selector" + i;
      let s= document.getElementById(id);
      let move = s.options[s.selectedIndex].text;

      individualMoves.push(move);

  }
  movesArray.push([individualMoves]);

  sessionStorage.setItem('movesArray', JSON.stringify(movesArray));
  window.location.href = "chooseMovesScript.js";
});








document.getElementById("moveSearchSubmit").addEventListener("click", function(event) {
  event.preventDefault();

  let move = document.getElementById("moveSearchInput").value;
  console.log(move);

    if (move === "") {
      return;
    }
    const url = "https://pokeapi.co/api/v2/move/" + move;
    fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";
      results += "<h2>" + json.name + "</h2>";
      results += "<p><strong>Type: </strong>" + json.type.name + "</p>";
      results += "<p><strong>Power: </strong>" + json.power + "</p>";
      results += "<p><strong>Accuracy: </strong>" + json.accuracy + "%</p>";
      results += "<p><strong>Description: </strong>" + json.flavor_text_entries[0].flavor_text + "</p>";

      document.getElementById("moveDesc").style.display = "block";
      document.getElementById("moveDesc").innerHTML = results;
      document.getElementById("moveSearchInput").value = "";

    }).catch(function() {
      window.alert("Move Spelt Incorrectly (make sure everything is in lowercase!)");
    });

});
