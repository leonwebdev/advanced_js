function dragIt(event) {
  console.log("drag success");
  event.dataTransfer.setData("text", event.target.id);
  console.log(event.target.id);
}

function dropIt(event) {
  event.preventDefault();
  console.log("drop start");
  var data = event.dataTransfer.getData("text");
  console.log(event.target);
  console.log(data);
  document.getElementById(data).style.top = "230px";
  document.getElementById(data).style.left = "608px";
  console.log("drop success");
  setInterval(drawHeart, 500);
}

function allowDrop(event) {
  event.preventDefault();
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function drawHeart() {
  let x = getRandomInt(10, canvas.width - 178);
  let y = getRandomInt(10, canvas.height - 165);

  var img = new Image();
  img.src = "images/heart.png";

  img.onload = function () {
    ctx.drawImage(img, 0, 0, 178, 165, x, y, 178, 165);
  };
}
