let pokeballArray = ["poke-ball", "great-ball", "ultra-ball", "master-ball"];

for (let i = 0; i < pokeballArray.length; i++) {
  let url = "https://pokeapi.co/api/v2/item/" + pokeballArray[i];
  fetch(url)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      let id2 = "pokeballDesc" + i;
      document.getElementById(id2).textContent = json.flavor_text_entries[0].text;
    })
    .catch(function(){
      console.log("WRONG");
    });



}
