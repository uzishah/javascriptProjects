playBoard = document.querySelector(".play-board");

let foodX, foodY;
let snakeX = 5,
  snakeY = 10;
snakeBody = [];
let velocityX = 0;
let velocityY = 0;

const changeDirection = (e) => {
  switch (e.key) {
    case "ArrowUp":
      velocityX = -1;
      velocityY = 0;
      break;
    case "ArrowDown":
      velocityX = 1;
      velocityY = 0;
      break;
    case "ArrowLeft":
      velocityX = 0;
      velocityY = -1;
      break;
    case "ArrowRight":
      velocityX = 0;
      velocityY = 1;
      break;
  }
};


const changeFoodPosition = () => {
  foodX = Math.floor(Math.random() * 31) + 1;
  foodY = Math.floor(Math.random() * 31) + 1;
};

const initGame = () => {
  let htmlMarkup = "";

  snakeX += velocityX;
  snakeY += velocityY;

//   // Check if the snake collides with the walls
//   if (snakeX < 1 || snakeX > 30 || snakeY < 1 || snakeY > 30) {
//     // Handle game over or reset the snake's position
//     // For now, let's just reset the snake's position to the center
// alert("game Over")
//   }

if (snakeX === foodX && snakeY === foodY) {
  changeFoodPosition();
  snakeBody.unshift([snakeX, snakeY]); // Add a new segment to the head
}

// Shift the snake body segments to create movement:
snakeBody.shift(); // Remove the tail segment
for (let i = 0; i < snakeBody.length; i++) {
  snakeBody[i] = snakeBody[i + 1]; // Shift each segment to the previous position
}
snakeBody[snakeBody.length - 1] = [snakeX, snakeY]; // Update the head position

htmlMarkup += `<div class="food" style="grid-row: ${foodX}; grid-column: ${foodY};"></div>`;

// Draw the snake head and body:
htmlMarkup += `<div class="head" style="grid-row: ${snakeX}; grid-column: ${snakeY};"></div>`;
for (let i = 0; i < snakeBody.length; i++) {
  htmlMarkup += `<div class="body" style="grid-row: ${snakeBody[i][0]}; grid-column: ${snakeBody[i][1]};"></div>`;
}

playBoard.innerHTML = htmlMarkup;
};


changeFoodPosition();
initGame();
setInterval(initGame, 125);

document.addEventListener("keydown", changeDirection);
