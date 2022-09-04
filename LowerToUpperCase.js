var name = prompt("What is your name?");

var lower = name.toLowerCase();

var changing_To_Upper_Case = lower.slice(0,1).toUpperCase() + lower.slice(1,100);

alert("Hello, " + changing_To_Upper_Case + "!");
