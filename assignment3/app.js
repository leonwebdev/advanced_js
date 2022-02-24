const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// Canvas Dimensions
canvas.width = 1200;
canvas.height = 800;

var img = new Image();
img.src = "images/background.jpg";

img.onload = function () {
  ctx.drawImage(img, 0, 0, 1200, 800, 0, 0, 1200, 800);
};

let get_name = localStorage.getItem("user_name");
let get_day = localStorage.getItem("the_day");
console.log(get_name);

document.querySelector("h1").innerHTML =
  "Hi, " + get_name + ". Today is " + get_day + ". Let's get dressed.";
