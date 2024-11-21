const slider = document.getElementById('slider');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
const buttonNext = document.getElementById('buttonNext');
const buttonPrev = document.getElementById('buttonPrev');
let slideIndex = 0;

buttonNext.addEventListener('click', nextSlide);
function nextSlide(){
    slideIndex = (slideIndex + 1) % slideCount;
    update();
}

buttonPrev.addEventListener('click', prevSlide);
function prevSlide(){
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    update();
}

function update(){
    slides.forEach(function(slide, i){
        if (i === slideIndex) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    })
}

setInterval(nextSlide, 3000);
update();