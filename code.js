var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
var el = document.getElementById("planets");


// Use the forEach method to add the name of each planet to a div element in your 
//  HTML with an id of "planets".
//  [* forEach needs to invoke a supplied function once per array element or once per
//  object property but it doesn't change the array. *]
planets.forEach(function (item) {
  el.innerHTML += item + " ";
});

el.innerHTML += "<br/><br/>";

// Use the map method to create a new array where the first letter of each planet is
//  capitalized. [* Map takes a list of values (an array or object), invokes a function 
//  on each of those values, and returns the new updated list in the same order. *]
var capitalizedPlanetsMap = [];

capitalizedPlanetsMap += planets.map(function (element) {
  return " " + element[0].toUpperCase() + element.substring(1);
});

el.innerHTML += capitalizedPlanetsMap + "<br/><br/>";


// Use the filter method to create a new array that contains planets with the letter 'e'
var ePlanets = planets.filter(function (element) {
    return element.includes("e");
});

el.innerHTML += ePlanets;

el.innerHTML += "<br/><br/>"

// Use the reduce method to create a sentence from the words in the following array
var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];
el.innerHTML += words.reduce(function(previousVal, currentVal) {
  return previousVal +" " + currentVal;});

