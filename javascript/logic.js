let slidenumber = 1;
let slides = document.getElementsByClassName("slides");
slides[1].style.display = "block";

function nextSlide() {
    if (slidenumber + 1 < slides.length) {
        slides[slidenumber].style.display = "none";
        slides[slidenumber + 1].style.display = "block";
        slidenumber++;
    }
    else if (slidenumber + 1 >= slides.length) {
        slides[slidenumber].style.display = "none";
        slides[0].style.display = "block";
        slidenumber = 0;
    }
}

function prevSlide() {
    if (slidenumber - 1 >= 0) {
        slides[slidenumber].style.display = "none";
        slides[slidenumber - 1].style.display = "block";
        slidenumber--;
    }
    else if (slidenumber - 1 < 0) {
        slides[slidenumber].style.display = "none";
        slides[slides.length - 1].style.display = "block";
        slidenumber = 2;
    }
}


