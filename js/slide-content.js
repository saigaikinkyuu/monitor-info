document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    let currentSlideIndex = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
    }

    function nextSlide() {
      currentSlideIndex = (currentSlideIndex + 1) % slides.length;
      showSlide(currentSlideIndex);
    }

    // 最初の表示
    showSlide(currentSlideIndex);

    // 5秒ごとにスライドを変更
    setInterval(nextSlide, 15000);
});

function keyActionE() {
    document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    let currentSlideIndex = 1;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
    }

    function nextSlide() {
      currentSlideIndex = 1 % slides.length;
      showSlide(currentSlideIndex);
    }

    // 最初の表示
    showSlide(currentSlideIndex);

    // 5秒ごとにスライドを変更
    setInterval(nextSlide, 15000);
    });
}
