var rawDate = new Date();
var dayList = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
var day = rawDate.getDay();
var hours = rawDate.getHours();
var minutes = rawDate.getMinutes();
var seconds = rawDate.getSeconds();
if(hours>12){
    var stdTime = hours-12;
}

if(hours>12){
  var ampm= "pm"
}
else{
  "am"
}

alert ("Today is : " + dayList[day] + "." + " " + "Current time is : " + stdTime + " " + ":" + " " + minutes + " " + ":" + " " + seconds + " " + ampm);





//Sample Output : Today is : Friday.
//Current time is : 4 PM : 50 : 22
