var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("imageSlides");
  var dots = document.getElementsByClassName("image-cta");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

function menu() {
var mobileButton = document.getElementById("mobile-icon");
      var nav = document.querySelector("nav");
     var mobileButtonExit = document.getElementById("mobile-exit");

      mobileButton.addEventListener("click", () => {
        nav.classList.add("menu-button");
      });

      mobileButtonExit.addEventListener("click", () => {
        nav.classList.remove("menu-button");
      });
}


