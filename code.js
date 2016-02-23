var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/* 
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
var el = document.getElementById("planets");

planets.forEach(function (item) {
  el.innerHTML += item + " ";
});

el.innerHTML += "<br/>";

// Use the map method to create a new array where the first letter of each planet is capitalized

planets.map(function (element) {
  el.innerHTML += element[0].toUpperCase() + element.slice(1) + " ";
});

el.innerHTML += "<br/>";


// Use the filter method to create a new array that contains planets with the letter 'e'

var ePlanets = planets.filter(function (element) {
  if (element.includes("e")) {
    return element;
  }
});

el.innerHTML += ePlanets;


// Use the reduce method to create a sentence from the words in the following array
var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];
el.innerHTML += "<br/>" + words.reduce(function(previousVal, currentVal) {
  return previousVal +" " + currentVal;});