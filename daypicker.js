

$(document).ready(function(){
  $("#button").click(function(){
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
    $("#button2").show();
  })
});

$(document).ready(function(){
  $("#button2").click(function(){
    $("#div3").hide();
    $(this).hide();
  })
});

$(document).ready(function(){
  $("#button").click(function(){
    $("#div2").hide();
  })
});
$(document).ready(function(){
  $("#button2").click(function(){
    $("#div2").show();
  })
});
