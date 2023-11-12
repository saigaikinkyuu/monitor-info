// ページが読み込まれた時点から10秒後に要素を表示
  document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
      // 要素の表示スタイルを変更
      document.getElementById('show-cont1').style.display = 'none';
      document.getElementById('slideshow-container').style.display = 'block';
    }, 10000); // 10000ミリ秒 = 10秒
    });
