const images = document.querySelectorAll(".website-img");
let index = 0;

function showNextImage() {
  images.forEach(img => img.style.display = "none");
  images[index].style.display = "block";
  index = (index + 1) % images.length;
}

setInterval(showNextImage, 1000);

showNextImage();