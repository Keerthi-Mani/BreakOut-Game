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
// Hold the radius of the drawn circle and be used for calculations
var ballRadius = 10;

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
//function will be called every 10 milliseconds forever, or until we stop it
function draw() {
  //the ball move without a trail
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  //Bouncing off the left and right
  if (x + dx > canvas.width || x + dx < 0) {
    dx = -dx;
  }
  //Bouncing off the top and bottom
  if (y + dy > canvas.height || y + dy < 0) {
    dy = -dy;
  }
  x += dx;
  y += dy;
}
setInterval(draw, 10);
