// Business logic

function determineCharacter (e) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  let planet = parseInt(document.querySelector("select#planet").value);
  const radioEvent = document.querySelector("input[name='radio']:checked").value;
  // let charInfo = document.querySelector('p');

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

  document.querySelector('p').innerText = "Your Hero " + name + " comes from the planet " + result + "! In addition to that, your hero can lift " + radioEvent + " tons";
  document.querySelector('p').removeAttribute("class")
  

  console.log("name, planet, radioEvent: ", name, planet, radioEvent);
}


// UI logic

window.addEventListener("load", function(){
    const form = document.querySelector("form");
    form.addEventListener("submit", determineCharacter);
});