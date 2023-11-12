function update() {
  var element = document.getElementById("now_time");
  element.textContent = new Date().toLocaleTimeString(); // 現在時刻を表示

  // 次の更新処理を予約
  setTimeout(update, 1000); // 1秒後に再度実行
}

// 初回の更新処理を開始
update();
