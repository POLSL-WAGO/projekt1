const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// create circles to draw
const circles = [
  {
    x: 40,
    y: 40,
    radius: 10,
    color: 'rgb(255,0,0)'
  },
  {
    x: 70,
    y: 70,
    radius: 10,
    color: 'rgb(0,255,0)'
  }
];

// draw circles
circles.forEach(circle => {
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = circle.color;
  ctx.fill();
});


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

function DrawPoint() {
    const x = getRandomInt(0, 500)
    const y = getRandomInt(0, 500)
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI, false);
    console.log("x= "+x +" y= "+y)
  ctx.fillStyle = 'rgb(0,255,0)';
  ctx.fill();
}



function Point() {
    
    console.log("funkcja");
    
}

