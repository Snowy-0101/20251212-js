const images = 
document.querySelectorAll('.gallery-item');
let currentIndex = 0;

window.addEventListener('load', () => {
    images[currentIndex].classList.add('active');
});

function changeImage() {
    images[currentIndex].classList.remove('active');

    currentIndex = (currentIndex + 1) % images.length;

    images[currentIndex].classList.add('active');
    }
    setInterval(changeImage, 4000);
