const slides = document.querySelector('.slides');
let slideIndex = 0;

function showNextSlide() {
    const slidesArray = slides.children;
    for (let i = 0; i < slidesArray.length; i++) {
        slidesArray[i].style.display = 'none';
    }
    slideIndex = (slideIndex + 1) % slidesArray.length;
    slidesArray[slideIndex].style.display = 'block';
}

setInterval(showNextSlide, 3000);

// Initially display the first slide
document.addEventListener("DOMContentLoaded", function() {
    slides.children[0].style.display = 'block';
});
