const imgs = ["g1.jpg","g2.jpg","g3.jpg"];

const randomImgs = imgs[Math.floor(Math.random() * imgs.length)];

const bgimages = document.createElement("img");

bgimages.src = `img/${randomImgs}`;

document.body.appendChild(bgimages);