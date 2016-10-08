

$(document).ready(function(){
  $("#timeback").click(function(){
      // prompts for day of the week
      x = prompt("What Day?")

      //converts day in number for array and makes case insensitive
      switch (x.toUpperCase()) {
        case "SUNDAY":
          x=0;
        break;
        case "MONDAY":
          x=1;
        break;
        case "TUESDAY":
          x=2;
        break;
        case "WEDNESDAY":
          x=3;
        break;
        case "THURSDAY":
          x=4;
        break;
        case "FRIDAY":
          x=5;
        break;
        case "SATURDAY":
          x=6;
        break;
        default: x = 7
      }

    $("#div3").show();
    $("#timehome").show();
  })
});

$(document).ready(function(){
  $("#timehome").click(function(){
      $("#clockh2").html("Calculating");
    $("#div3").hide();
    $("#timehome").hide();
  })
});
