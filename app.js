//let the forloop go thru the array of lights and turn on the lights of one at a time till a certain point.
//user can control amount of lights and speed

//to do:
//work on the lighting up and speed part of it

var lights = document.getElementById("lightHolder");
let lightArray = [];

//slider stuff for amount of lights
var slider = document.getElementById("nolSlider");
var numberOfLightsOutput = document.getElementById("numberOfLights");
numberOfLightsOutput.innerHTML = slider.value; // Display the default slider value
slider.oninput = function() {
  numberOfLightsOutput.innerHTML = this.value;
  lights.innerHTML = "";
  showLights();
}

//slider stuff for speed
var speedSlider = document.getElementById("speedSlider");
var speedOutput = document.getElementById("speed");
speedOutput.innerHTML = speedSlider.value; // Display the default slider value
speedSlider.oninput = function() {
  speedOutput.innerHTML = this.value;
}


function showLights(){
  for (var num = 0; num < slider.value; num++) {
    lights.innerHTML += '<img class="lights" src="lightbulb.png" style="height: 50px;">';
  }
}