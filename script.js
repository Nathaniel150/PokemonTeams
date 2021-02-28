let pokemonTeam = [];
let counter = 0;

function checkSize(pokemonTeam) {

};


if (document.getElementById("pokemonSubmit") != null) {
  document.getElementById("pokemonSubmit").addEventListener("click", function(event) {
    event.preventDefault();

    const value = document.getElementById("pokemonInput").value;

    if (value === "") {
      return;
    }
    if (counter > 5) {
      return;
    }

    const newId = "image" + counter;
    url = "https://pokeapi.co/api/v2/pokemon/" + value;
    fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      //console.log(json);///
      document.getElementById(newId).src = json.sprites.front_default;
      pokemonTeam.push(json);
      //console.log(pokemonTeam);///
      document.getElementById("pokemonInput").value = "";
      counter++;
    }).catch(function() {
      window.alert("Pokemon Spelt Incorrectly (make sure everything is in lowercase!)");
    });

  });
}




  document.getElementById('nextChoose').onclick=function(){
    sessionStorage.setItem('pokemonArray', JSON.stringify(pokemonTeam));
    window.location.href = "chooseMovesScript.js";
    window.location.href = "finishedTeam.html";
  }
