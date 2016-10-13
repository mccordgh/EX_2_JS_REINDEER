var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

var hohohoElement = document.getElementById("coloredReindeer");

console.log(colors.length);
console.log(reindeer.length);

for (i=0; i < reindeer.length; i++) {
	hohohoElement.innerHTML += colors[i] + " " + reindeer[i] + "<br>";
}
