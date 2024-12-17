const prev = document.getElementById("prev");
const next = document.getElementById("next");
let image = document.getElementById("image");


let images = ["../img/image1.jpg", "../img/image2.jpg", "../img/image3.jpg"];
let values = 0;

// prev
prev.addEventListener("click", () => {
  values -= 1;

  if (values < 0) {
    values = images.length - 1;
  }

  image.src = images[values];
});


// next
next.addEventListener("click", () => {
  values += 1;

  if (values >= images.length) {
    values = 0;
  }

  image.src = images[values];
});
