// Bussines logic

function determineCharacter (e) {
  event.preventDefault();
  let planet = parseInt(document.querySelector("select#planet").value);

  let result;
  if (planet === 1) {
    result = "Earth super strength"
  } else if (planet === 2) {
    result = "Mars: you're flying"
  } else if (planet === 3) {
    result = "Venus: you can grow foliage"
  } else if (planet === 4) {
    result = "Pluto: you command asteroid belts"
  }

 const name = document.getElementById("name").value;
//  name;
  console.log("name & planet: ", name, planet);
}


// UI logic

window.addEventListener("load", function(){
    const form = document.querySelector("form");
    form.addEventListener("submit", determineCharacter);
});