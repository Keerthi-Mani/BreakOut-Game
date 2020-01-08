//We are storing a reference to the <canvas> element to the canvas variable
var canvas = document.getElementById("myCanvas");
//Creating a variable to store the 2D rendering context
var ctx = canvas.getContext("2d");

//Piece of code that prints a red square on the canvas
ctx.beginPath();
ctx.rect(20, 40, 50, 50); //(Left Top Width Height)
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();

//Piece of code that prints a green circle on the canvas
ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();

//The code prints a blue-stroked empty rectangle.
ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
ctx.stroke();
ctx.closePath();
