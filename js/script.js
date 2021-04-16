const canvas = document.getElementById("canvas");
const ctx    = canvas.getContext("2d");
ctx.fillStyle = 'white';
ctx.font = '18px serif';

class Ghost {
  constructor() {
    this.x = 25;
    this.y = 25;
    
    // Load the image
    const img = new Image();
    img.addEventListener('load', () => {
      // Once image loaded => draw
      this.img = img;
      this.draw();
    });
    img.src = "https://media.giphy.com/media/JS9cA2mnPbpoiwsQ3A/giphy.gif";
  }
  moveUp() {
    this.y -= 25;
  }
  moveDown() {
    this.y += 25;
  }
  moveLeft() {
    this.x -= 25;
  }
  moveRight() {
    this.x += 25;
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, 25, 25);
  }
}

const ghost = new Ghost();

document.addEventListener('keydown', e => {
  switch (e.keyCode) {
    case 38: ghost.moveUp();    console.log('up',    ghost); break;
    case 40: ghost.moveDown();  console.log('down',  ghost); break;
    case 37: ghost.moveLeft();  console.log('left',  ghost); break;
    case 39: ghost.moveRight(); console.log('right', ghost); break;
  }
  updateCanvas();
})

const updateCanvas= ()=> {
  ctx.clearRect(0,0,1500,1700);
  ctx.fillText("Ghost_x: " + ghost.x, 580,40);
  ctx.fillText("Ghost_y: " + ghost.y, 580,60);
  
  ghost.draw()
}

updateCanvas()