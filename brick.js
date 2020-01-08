//We are storing a reference to the <canvas> element to the canvas variable
var canvas = document.getElementById("myCanvas");
//Creating a variable to store the 2D rendering context
var ctx = canvas.getContext("2d");

//function will be called every 10 milliseconds forever, or until we stop it
function draw() {
  ctx.beginPath();
  ctx.arc(50, 50, 10, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
setInterval(draw, 10);
