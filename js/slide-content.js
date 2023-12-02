var flag = false;
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    let currentSlideIndex = 0;

    function showSlide(index) {
        if(flag === false){
          slides.forEach((slide, i) => {
          slide.classList.toggle('active', i === index);
          });
        }
    }

    function nextSlide() {
      currentSlideIndex = (currentSlideIndex + 1) % slides.length;
      console.log(slides.length)
      showSlide(currentSlideIndex);
    }

    // 最初の表示
    showSlide(currentSlideIndex);

    // 5秒ごとにスライドを変更
    setInterval(nextSlide, 15000);
});

function keyActionE() {
    if(flag === false){
        flag = true;
        const slides = document.querySelectorAll('.slide');
        var currentSlideIndex = 1 % 3;
        // 最初の表示
        showSlide(currentSlideIndex);
        function showSlide(index) {
          slides.forEach((slide, i) => {
          slide.classList.toggle('active', i === index);
          });
        }
    }else{
        flag = false;
    }
}
