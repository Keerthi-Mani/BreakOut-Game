# BreakOut-Game

A simple MDN Breakout game written entirely in pure JavaScript and rendered on HTML5 Canvas.You will learn the basics of using the Canvas element to implement fundamental game mechanics like rendering and moving images, collision detection, control machanisms, and winning and losing states.

### Click the link to the checkout the game

[Brick Break out game](https://keerthi-mani.github.io/BreakOut-Game/)

## 2D breakout game using pure JavaScript

- Create the Canvas in html page and draw on it.

```
    <canvas id="myCanvas" width="480" height="320"></canvas>
```

- Move the ball.

```
function draw() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
    x += dx;
    y += dy;
}
```

- Bounce off the walls.

```
  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if (y + dy < ballRadius) {
    dy = -dy;
  }
```

- Paddle and keyboard controls.

```
function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}
```

- Game over.

```
if(y + dy < ballRadius) {
    dy = -dy;
} else if(y + dy > canvas.height-ballRadius) {
    if(x > paddleX && x < paddleX + paddleWidth) {
        dy = -dy;
    }
    else {
        alert("GAME OVER");
        document.location.reload();
        clearInterval(interval);
    }
}
```

- Build the brick field.

```
function drawBricks() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
            var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, brickWidth, brickHeight);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
        }
    }
}
```

- Collision detection.

```
function collisionDetection() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            var b = bricks[c][r];
            if(b.status == 1) {
                if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                    dy = -dy;
                    b.status = 0;
                }
            }
        }
    }
}
```

- Track the score and win.

```
function collisionDetection() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            var b = bricks[c][r];
            if(b.status == 1) {
                if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                    dy = -dy;
                    b.status = 0;
                    score++;
                    if(score == brickRowCount*brickColumnCount) {
                        alert("YOU WIN, CONGRATULATIONS!");
                        document.location.reload();
                        clearInterval(interval); // Needed for Chrome to end game
                    }
                }
            }
        }
    }
}
```

- Mouse controls.

```
function mouseMoveHandler(e) {
    var relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth/2;
    }
}
```

- Finishing up.

```
lives--;
if(!lives) {
    alert("GAME OVER");
    document.location.reload();
    clearInterval(interval); // Needed for Chrome to end game
}
else {
    x = canvas.width/2;
    y = canvas.height-30;
    dx = 2;
    dy = -2;
    paddleX = (canvas.width-paddleWidth)/2;
}
```

## Screenshots

<img width="483" alt="Screen Shot 2020-01-10 at 8 58 00 AM" src="https://user-images.githubusercontent.com/52920074/72158091-6d905b00-3387-11ea-8c2b-70331538f050.png">

<img width="475" alt="Screen Shot 2020-01-10 at 8 59 17 AM" src="https://user-images.githubusercontent.com/52920074/72158123-826cee80-3387-11ea-81f0-b50f5515a02b.png">
