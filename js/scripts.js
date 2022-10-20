// Bussines logic

function determineCharacter (e) {
  event.preventDefault();
  let planet = parseInt(document.querySelector("select#planet").value);

  let result;
  if (planet === 1) {
    result = "Earth super strength"
  } else if (planet === 2) {
    result = "flying"
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