var ramdanDate = new Date("11 march, 2024").getTime()
console.log(ramdanDate)

var x = setInterval(function(){
 var now = new Date().getTime()
 console.log(now)

 diff = ramdanDate- now
 console.log(diff)

  var days = Math.floor(diff/(1000*60*60*24))

  console.log(days)
var hours = Math.floor(diff%(1000*60*60*24)/(1000*60*60))

console.log(hours)


var minutes = Math.floor((diff%(1000*60*60))/(1000*60))

console.log(minutes)
var sec = Math.floor((diff%(1000*60))/(1000))
console.log(sec)

document.getElementById("time").innerHTML= days+ "D:"+ hours+"H:"+ minutes + "min:"+ sec + "sec"
}, 1000)