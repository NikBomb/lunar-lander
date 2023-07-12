var canvas = document.getElementById("game");
var context = canvas.getContext("2d");

context.beginPath();
context.rect(0, 0, 100, 100);
context.fillStyle = "black";
context.fill();
context.strokeStyle = "green";
context.stroke();

context.beginPath();
context.arc(200, 200, 20, 0, 2*Math.PI);
context.fillStyle = "red";
context.fill();
