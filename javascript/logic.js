let slidenumber = 1;
let slides = document.getElementsByClassName("slides");
slides[1].style.display = "block";

function nextSlide() {
    if (slidenumber + 1 < slides.length) {
        slides[slidenumber].style.display = "none";
        slides[slidenumber + 1].style.display = "block";
        slidenumber++;
    }
}

function prevSlide() {
    if (slidenumber - 1 >= 0) {
        slides[slidenumber].style.display = "none";
        slides[slidenumber - 1].style.display = "block";
        slidenumber--;
    }
}


