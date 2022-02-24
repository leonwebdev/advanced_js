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
}

function allowDrop(event) {
  event.preventDefault();
}
