function calculateAge(){
    var dob = new Date(document.getElementById("dob").value)

     var ageInMS = Date.now() - dob.getTime()




     var ageDate = new Date(ageInMS);


     var age = Math.abs(ageDate.getUTCFullYear()-1970);


     var month = ageDate.getUTCMonth();


     var day = ageDate.getUTCDate()-1;



     document.getElementById("year").innerHTML=age;
     document.getElementById("month").innerHTML=month;
     document.getElementById("day").innerHTML=day;
} 