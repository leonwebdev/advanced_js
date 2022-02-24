const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// Canvas Dimensions
canvas.width = 1200;
canvas.height = 800;

var img = new Image();
img.src = "images/background.jpg";

img.onload = function () {
    ctx.drawImage(img, 0, 0, 1200, 800, 0, 0, 1200, 800);
}

const doll = document.querySelector('#doll');
const skirt = document.querySelector('#skirt');

