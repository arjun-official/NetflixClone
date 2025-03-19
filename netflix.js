document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.carouselCardContainer');
    let index = 0;

    function slideCarousel() {
        index++;
        if (index >= carouselContainer.children.length) {
            index = 0;
        }
        carouselContainer.style.transform = `translateX(${-index * 100}%)`;
    }

    setInterval(slideCarousel, 3000); // Change slide every 3 seconds
});