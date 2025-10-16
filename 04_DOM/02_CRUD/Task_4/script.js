const gallery = document.getElementById("gallery");

// Create container for each image with its title
const imageWithTitle1 = document.createElement("div");
const title1 = document.createElement("h3");
const img1 = document.createElement("img");

title1.textContent = "Image 1";
img1.src = "https://picsum.photos/100";
imageWithTitle1.append(title1, img1);


const imageWithTitle2 = document.createElement("div");
const title2 = document.createElement("h3");
const img2 = document.createElement("img");
title2.textContent = "Image 2";
img2.src = "https://picsum.photos/101";
imageWithTitle2.append(title2, img2);

const imageWithTitle3 = document.createElement("div");
const title3 = document.createElement("h3");
const img3 = document.createElement("img");
title3.textContent = "Image 3";
img3.src = "https://picsum.photos/102";
imageWithTitle3.append(title3, img3);


gallery.append(imageWithTitle1, imageWithTitle2, imageWithTitle3);