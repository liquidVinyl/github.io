for (var i = 1; i<2; i++){
function timeTraveler (){
  var rawDate = new Date();
  var dayList = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday", "ERROR"];
  var day = rawDate.getDay();
  var hours = rawDate.getHours();
  var minutes = rawDate.getMinutes();
  var seconds = rawDate.getSeconds();
//conversions


  if(hours === 0){
    var stdTime = 12;

  }

  else if(hours>12){
    stdTime = hours-12;

  }

  else {
    stdTime = hours;

  };


  if (minutes < 10){
    var addZeroToMinutes = "0" + minutes;
  }
  else {
    addZeroToMinutes = minutes;
  };


  if (seconds<10){
    var addZeroToSeconds = "0" + seconds;
  }
    else{
      addZeroToSeconds = seconds;
  };


  if (hours>12){
    var ampm= "PM";
  }
  else{
    ampm = "AM";
  };

var clock = dayList[x] + " " + stdTime + " : " + addZeroToMinutes + " : " + addZeroToSeconds + " " + ampm;

//adds the clock to HTML

$(document).ready(function(){
  $("#clockh2").html(clock);
})

};


//counter
$(document).ready(function(){
  setInterval('timeTraveler()', 1000);
});
}
//Shows the past time clock
/*$(document).ready(function(){
  $("#timeback").click(function(){
    $("#div3").show();
    $("#timehome").show();
  })
});

//hides past clock and back to the future button
$(document).ready(function(){
  $("#timehome").click(function(){
    $("#div3").hide();
    $("#timehome").hide();
  })
});
*/
/*testing
var rawDate = new Date();
var dayList = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
var day = rawDate.getDay();
var hours = rawDate.getHours();
var minutes = rawDate.getMinutes();
var seconds = rawDate.getSeconds();

console.log(dayList);

//console.log(day);

console.log(hours);

console.log(minutes);

console.log(seconds);
*/
