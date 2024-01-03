document.getElementById("hour")
document.getElementById("min")
document.getElementById("sec")

function displayTime(){

    let date = new Date()

   hh= date.getHours()
   mm = date.getMinutes()
   ss = date.getSeconds()

   let hRotate = 30 * hh + mm/2
   let mRotate = 6 * mm
   let sRotate = 6 * ss

   hour.style.transform = `rotate(${hRotate}deg)`
   min.style.transform = `rotate(${mRotate}deg)`
   sec.style.transform = `rotate(${sRotate}deg)`



}
setInterval(displayTime, 1000);