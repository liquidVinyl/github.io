

$(document).ready(function(){
  $("#timeback").click(function(){
      // prompts for day of the week
      x = prompt();

      switch (x) {
        case "Sunday":
          x=0;
        break;
        case "Monday":
          x=1;
        break;
        case "Tuesday":
          x=2;
        break;
        case "Wednesday":
          x=3;
        break;
        case "Thursday":
          x=4;
        break;
        case "Friday":
          x=5;
        break;
        case "Saturday":
          x=6;
        default: x = 7
      }

    $("#div3").show();
    $("#timehome").show();
  })
});

$(document).ready(function(){
  $("#timehome").click(function(){
    $("#div3").hide();
    $("#timehome").hide();
  })
});
