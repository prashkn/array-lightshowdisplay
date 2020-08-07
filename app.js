//let the forloop go thru the array of lights and turn on the lights of one at a time till a certain point.
//user can control amount of lights and speed

//to do:
//work on the lighting up and speed part of it

var lights = document.getElementById("lightHolder");
var startGame = document.getElementById("startGame");
let placeholder;
let lightArray = [];
let tempNumber = 0;
let x = 500;

//slider stuff for amount of lights
var slider = document.getElementById("nolSlider");
var numberOfLightsOutput = document.getElementById("numberOfLights");
numberOfLightsOutput.innerHTML = slider.value; // Display the default slider value
slider.oninput = function() {
  numberOfLightsOutput.innerHTML = this.value;
  lights.innerHTML = "";
  counter=0;
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
    lights.innerHTML += '<img class="lights" id="light' + counter + '" src="lightbulb.png" style="height: 50px;">';
    counter++;
  }
}

function brightUp(){
  for (let g = 0; g <= 100; g++) {
    lightArray[g] = document.getElementById("light"+g.toString());
  }

  let speed = 1005 + (100*(1 - (Number(speedOutput.innerHTML))));
  if (speed <= 0) {
    speed = 50;
  }
  x = speed;

  lightArray[0].src = "bwlightbulb.png";
  setTimeout(function(){
    lightArray[0].src = "lightbulb.png";
    lightArray[1].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[1].src = "lightbulb.png";
    lightArray[2].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[2].src = "lightbulb.png";
    lightArray[3].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[3].src = "lightbulb.png";
    lightArray[4].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[4].src = "lightbulb.png";
    lightArray[5].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[5].src = "lightbulb.png";
    lightArray[6].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[6].src = "lightbulb.png";
    lightArray[7].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[7].src = "lightbulb.png";
    lightArray[8].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[8].src = "lightbulb.png";
    lightArray[9].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[9].src = "lightbulb.png";
    lightArray[10].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[10].src = "lightbulb.png";
    lightArray[11].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[11].src = "lightbulb.png";
    lightArray[12].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[12].src = "lightbulb.png";
    lightArray[13].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[13].src = "lightbulb.png";
    lightArray[14].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[14].src = "lightbulb.png";
    lightArray[15].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[15].src = "lightbulb.png";
    lightArray[16].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[16].src = "lightbulb.png";
    lightArray[17].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[17].src = "lightbulb.png";
    lightArray[18].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[18].src = "lightbulb.png";
    lightArray[19].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[19].src = "lightbulb.png";
    lightArray[20].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[20].src = "lightbulb.png";
    lightArray[21].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[21].src = "lightbulb.png";
    lightArray[22].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[22].src = "lightbulb.png";
    lightArray[23].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[23].src = "lightbulb.png";
    lightArray[24].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[24].src = "lightbulb.png";
    lightArray[25].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[25].src = "lightbulb.png";
    lightArray[26].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[26].src = "lightbulb.png";
    lightArray[27].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[27].src = "lightbulb.png";
    lightArray[28].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[28].src = "lightbulb.png";
    lightArray[29].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[29].src = "lightbulb.png";
    lightArray[30].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[30].src = "lightbulb.png";
    lightArray[31].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[31].src = "lightbulb.png";
    lightArray[32].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[32].src = "lightbulb.png";
    lightArray[33].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[33].src = "lightbulb.png";
    lightArray[34].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[34].src = "lightbulb.png";
    lightArray[35].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[35].src = "lightbulb.png";
    lightArray[36].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[36].src = "lightbulb.png";
    lightArray[37].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[37].src = "lightbulb.png";
    lightArray[38].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[38].src = "lightbulb.png";
    lightArray[39].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[39].src = "lightbulb.png";
    lightArray[40].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[40].src = "lightbulb.png";
    lightArray[41].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[41].src = "lightbulb.png";
    lightArray[42].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[42].src = "lightbulb.png";
    lightArray[43].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[43].src = "lightbulb.png";
    lightArray[44].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[44].src = "lightbulb.png";
    lightArray[45].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[45].src = "lightbulb.png";
    lightArray[46].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[46].src = "lightbulb.png";
    lightArray[47].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[47].src = "lightbulb.png";
    lightArray[48].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[48].src = "lightbulb.png";
    lightArray[49].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[49].src = "lightbulb.png";
    lightArray[50].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[50].src = "lightbulb.png";
    lightArray[51].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[51].src = "lightbulb.png";
    lightArray[52].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[52].src = "lightbulb.png";
    lightArray[53].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[53].src = "lightbulb.png";
    lightArray[54].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[54].src = "lightbulb.png";
    lightArray[55].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[55].src = "lightbulb.png";
    lightArray[56].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[56].src = "lightbulb.png";
    lightArray[57].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[57].src = "lightbulb.png";
    lightArray[58].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[58].src = "lightbulb.png";
    lightArray[59].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[60].src = "lightbulb.png";
    lightArray[61].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[61].src = "lightbulb.png";
    lightArray[62].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[62].src = "lightbulb.png";
    lightArray[63].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[63].src = "lightbulb.png";
    lightArray[64].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[64].src = "lightbulb.png";
    lightArray[65].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[65].src = "lightbulb.png";
    lightArray[66].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[66].src = "lightbulb.png";
    lightArray[67].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[67].src = "lightbulb.png";
    lightArray[68].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[68].src = "lightbulb.png";
    lightArray[69].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[69].src = "lightbulb.png";
    lightArray[70].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[70].src = "lightbulb.png";
    lightArray[71].src = "bwlightbulb.png";
  },x); x = x + speed;
  setTimeout(function(){
    lightArray[71].src = "lightbulb.png";
    lightArray[72].src = "bwlightbulb.png";
  },x); x = x + speed;
}