//let the forloop go thru the array of lights and turn on the lights of one at a time till a certain point.
//user can control amount of lights and speed


let lightArray = [];

//slider stuff for amount of lights
var slider = document.getElementById("nolSlider");
var numberOfLightsOutput = document.getElementById("numberOfLights");
numberOfLightsOutput.innerHTML = slider.value; // Display the default slider value
slider.oninput = function() {
  numberOfLightsOutput.innerHTML = this.value;
}

//slider stuff for speed
var speedSlider = document.getElementById("speedSlider");
var speedOutput = document.getElementById("speed");
speedOutput.innerHTML = speedSlider.value; // Display the default slider value
speedSlider.oninput = function() {
  speedOutput.innerHTML = this.value;
}