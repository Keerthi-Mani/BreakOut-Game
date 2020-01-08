//We are storing a reference to the <canvas> element to the canvas variable
var canvas = document.getElementById("myCanvas");
//Creating a variable to store the 2D rendering context
var ctx = canvas.getContext("2d");
//To define the position the circle is drawn at
var x = canvas.width / 2;
var y = canvas.height - 30;
//To make it appear that the ball is moving
var dx = 2;
var dy = -2;

//function will be called every 10 milliseconds forever, or until we stop it
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
  x += dx;
  y += dy;
}
setInterval(draw, 10);
