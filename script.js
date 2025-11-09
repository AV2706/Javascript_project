const ball = document.getElementById("ball");         
const scoreDisplay = document.getElementById("score"); 
const catchSound = document.getElementById("catchSound"); 

const catCursor = document.createElement("img");       
catCursor.src = "catcursor.png";   
catCursor.id = "cat-cursor";                        
document.body.appendChild(catCursor);  
catCursor.style.width = "50px";
catCursor.style.height = "50px";             

let score = 0;
document.addEventListener("mousemove", (e) => {
  console.log(e.pageX, e.pageY);
  catCursor.style.left = e.pageX + "px"; 
  catCursor.style.top = e.pageY + "px";  
});

let ballX = 100, ballY = 100; 
let speedX = 4, speedY = 3;  

setInterval(() => {  
  ballX += speedX;  
  ballY += speedY; 
   
  if (ballX <= 0 || ballX + 60 >= window.innerWidth) speedX = -speedX;
  if (ballY <= 0 || ballY + 60 >= window.innerHeight) speedY = -speedY;

 

  ball.style.left = `${ballX}px`;
  ball.style.top = `${ballY}px`;


const catRect = catCursor.getBoundingClientRect();
const ballRect = ball.getBoundingClientRect();
const overlap =
catRect.left < ballRect.right &&
catRect.right > ballRect.left &&
catRect.top < ballRect.bottom &&
catRect.bottom > ballRect.top;

if (overlap) {
score++;
scoreDisplay.textContent = score;
catchSound.play();
speedX *= 1.05;
speedY *= 1.05;
}
}, 20);





  
 

