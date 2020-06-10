const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

var shapes = [];

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
  shapes.push({ x: pkt_x, y: pkt_y, width: pkt_x, radius: 6, isDragging: false });
}

function DrawCircle() {
  //funkcja rysuje okrąg w wybranym przez nas miejscu,rozmiarze i kolorze

  var circle_x = document.getElementById("cir_x").value;
  var circle_y = document.getElementById("cir_y").value;
  var circle_size = document.getElementById("cir_r").value;
  var circle_color = document.getElementById("cir_color").value;
  //console.log(circle_size);
  ctx.beginPath();
  ctx.arc(circle_x, circle_y, circle_size, 0, 2 * Math.PI, false);
  ctx.strokeStyle = circle_color;
  ctx.stroke();
}

function DrawLine() {
  // ta funkcja rysuje linie
  var start_x = document.getElementById("linStart_x").value;
  var start_y = document.getElementById("linStart_y").value;
  var end_x = document.getElementById("linEnd_x").value;
  var end_y = document.getElementById("linEnd_x").value;
  var line_color = document.getElementById("lin_color").value;
  ctx.beginPath();

  ctx.moveTo(start_x, start_y);
  ctx.lineTo(end_x, end_y);
  ctx.strokeStyle = line_color;
  ctx.stroke();
}

var Points2;

function polygon(S) {
  const Points = new Array(S);
  for (i = 0; i < S; i++) {
    Points[i] = [];
  }
  for (i = 0; i < S; i++) {
    for (j = 0; j <= 1; j++) {
      if (j == 0) {
        Points[i][j] = prompt("Wprowadz współrzędną x" + i);
      } else {
        Points[i][j] = prompt("Wprowadz współrzędną y" + i);
      }
    }
  }
  DrawPolygon(Points);
}

function DrawPolygon(Points2) {
  console.log(Points2);
  console.log(Points2[0][0]);
  var pol_color = document.getElementById("pol_color").value;
  ctx.beginPath();

  ctx.moveTo(Points2[0][0], Points2[0][1]);
  for (item = 1; item <= Points2.length - 1; item += 1) {
    ctx.lineTo(Points2[item][0], Points2[item][1]);
  }
  ctx.closePath();

  ctx.strokeStyle = pol_color;
  ctx.stroke();
}
