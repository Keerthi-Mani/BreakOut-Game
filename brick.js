//We are storing a reference to the <canvas> element to the canvas variable
var canvas = document.getElementById("myCanvas");
//Creating a variable to store the 2D rendering context
var ctx = canvas.getContext("2d");

//Piece of code that prints a red square on the canvas
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();
