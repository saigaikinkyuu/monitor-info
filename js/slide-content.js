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
      showSlide(currentSlideIndex);
    }

    // 最初の表示
    showSlide(currentSlideIndex);

    // 5秒ごとにスライドを変更
    setInterval(nextSlide, 15000);
});

function keyActionE() {
    if(flag === false){
        document.getElementById("quake_fixed").style.display = "block";
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
        document.getElementById("quake_fixed").style.display = "none";
        flag = false;
    }
}
function keyActionA() {
    if(flag === false){
        document.getElementById("amds_fixed").style.display = "block";
        flag = true;
        const slides = document.querySelectorAll('.slide');
        var currentSlideIndex = 2 % 3;
        // 最初の表示
        showSlide(currentSlideIndex);
        function showSlide(index) {
          slides.forEach((slide, i) => {
          slide.classList.toggle('active', i === index);
          });
        }
    }else{
        document.getElementById("amds_fixed").style.display = "none";
        flag = false;
    }
}
