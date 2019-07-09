var slides = document.querySelectorAll(".slider-item");
var prevSlide = document.querySelector(".btn-icon-prev");
var nextSlide = document.querySelector(".btn-icon-next");
var slideControls = document.querySelectorAll(".slider-controls i");
var i = 0;


nextSlide.onclick = function () {
    slides[i].style.display = "none";
    slideControls[i].classList.remove("active");
    i++;

    if (i >= slides.length) {
        i = 0;
    }

    slides[i].style.display = "block";
    slideControls[i].classList.add("active");
}


prevSlide.onclick = function () {
    slides[i].style.display = "none";
    slideControls[i].classList.remove("active");
    i--;

    if (i < 0) {
        i = slides.length - 1;
    }

    slides[i].style.display = "block";
    slideControls[i].classList.add("active");
}


slideControls[i].addEventListener("click", function () {
    slides[i].style.display = "none";
    slideControls[i].classList.remove("active");
    i++;

    if (i >= slides.length) {
        i = 0;
    }

    slides[i].style.display = "block";
    slideControls[i].classList.add("active");
});

slideControls[i + 1].addEventListener("click", function () {
    slides[i].style.display = "none";
    slideControls[i].classList.remove("active");
    i--;

    if (i < 0) {
        i = slides.length - 1;
    }

    slides[i].style.display = "block";
    slideControls[i].classList.add("active");
});



