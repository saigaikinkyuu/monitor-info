const marqueeTexts = document.querySelectorAll('.marquee-inner');

marqueeTexts.forEach((marqueeText) => {
  marqueeText.animate(
    {
      translate: [0, 'calc(-100% - 1rem)']
    },
    {
      duration: 60000,
      iterations: Infinity
    }
  );
});