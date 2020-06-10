const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

function DrawPoint() {
  // funkcja rysująca punkt
  var pkt_x = document.getElementById("pkt_x").value;
  var pkt_y = document.getElementById("pkt_y").value;
  var pkt_color = document.getElementById("pkt_color").value;
  ctx.beginPath();
  ctx.arc(pkt_x, pkt_y, 6, 0, 2 * Math.PI, false);
  //console.log("x= " + pkt_x + " y= " + pkt_y); w konsoli wyświtla współrzene punktu
  ctx.fillStyle = pkt_color;
  ctx.fill();
}

function DrawCircle() {
  var circle_x = document.getElementById("pkt_x").value;
  var circle_y = document.getElementById("pkt_y").value;
  var circle_size = document.getElementById("pkt_color").value;
  var circle_color = document.getElementById("pkt_color").value;

  ctx.arc(circle_x, circle_y, circle_size, 0, 2 * Math.PI, false);
  ctx.strokeStyle = circle_color;
}
