var I = 5;
var love = 4;

var batman = I * love;
var superman = I - love;
var wonderwoman = I  + love;
var flash = I / love;

document.getElementById("degree").innerHTML = "When I add" + I + "to" + love + "I get" + wonderwoman + ".";
document.getElementById("movies").innerHTML = "When I minus" I + "to" + love + "I get" + superman + ".";
document.getElementById("moving").innerHTML = "When I multiply" + I + "to" + love + "I get" + batman + ".";
document.getElementById("friend").innerHTML = "When I divide" + I + "by" + love + "I get" + flash + ".";
