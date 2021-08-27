let slidenumber = 1;
let slides = document.getElementsByClassName("slides");
slides[1].style.display = "block";

function nextSlide() {
    if (slidenumber + 1 < slides.length) {
        slideManagement(slidenumber + 1);
        slidenumber++;
    }
    else if (slidenumber + 1 >= slides.length) {
        slideManagement(0);
        slidenumber = 0;
    }
}

function prevSlide() {
    if (slidenumber - 1 >= 0) {
        slideManagement(slidenumber - 1);
        slidenumber--;
    }
    else if (slidenumber - 1 < 0) {
        slideManagement(slides.length - 1);
        slidenumber = 2;
    }
}

function slideManagement(x) {
    slides[slidenumber].style.display = "none";
    slides[x].style.display = "block";
}