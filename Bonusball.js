var velocity = 100;
var positionX = 0;
var positionY = 0;
var ball = document.getElementById('ball');
var ball1 = document.getElementById('ball1');
var reverse = false;
var Xmin = 0;
var Xmax = 400;
var Ymin = 0;
var Ymax = 400;

function moveAllBalls(){
    moveBall(ball, "red", "blue");
    moveBall(ball1, "orange", "black");
}

function moveBall(targetBall, forwardColor, reverseColor) {
    
    positionX = Math.random() * Xmax;
    positionY = Math.random() * Ymax;
    console.log(`positionX ${positionX}` );
    console.log(`positionY ${positionY}` );
    


    if (reverse) {
        positionX = positionX - velocity;
        positionY = positionY - velocity;
        targetBall.style.left = positionX + 'px';
        targetBall.style.top = positionY + 'px';
        targetBall.style.background = reverseColor;
    } 
    else {
        positionX = positionX + velocity;
        positionY = positionY + velocity;
        targetBall.style.left = positionX + 'px';
        targetBall.style.top = positionY + 'px';
        targetBall.style.background = forwardColor;
    }
    if (positionX > Xmax || positionX < Xmin ||positionY > Ymax || positionY < Ymin) {
        reverse = !reverse;
    }
}
setInterval(moveAllBalls, 1000);
