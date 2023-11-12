function timeUpdate() {
  var now_time = new Date();
  var year = now_time.getFullYear();
  var month = now_time.getMonth()+1;
  var date = now_time.getDate();
  var hours = now_time.getHours();
  var minute = now_time.getMinutes();
  var second = now_time.getSeconds();
  var time = year + "/" + month + "/" + date + " " + hours + ":" + minute + ":" + second;
  document.getElementById('now_time').innerHTML = time;
  console.log(time)
  setInterval(timeUpdate, 100);
}
