console.log('jq workin like yo mama');

var switchposition = 2;
$("#switchLabel").html("inactive");

$("#handle").click(function() {
  console.log('click click');
  console.log(switchposition);
  switch (switchposition) {
    case switchposition = 1:
      switchposition = 3;
      $("#switchLabel").empty();
      $("#switchLabel").append("<h3>ON</h3>");
      $("#handle").css("background-color", "#27ae60");
      $(this).animate({
            'marginLeft' : "+=80px" //moves to on
            })
      break;
    case switchposition = 2:
      switchposition = 3;
      $("#switchLabel").empty();
      $("#switchLabel").append("<h3>ON</h3>");
      $("#handle").css("background-color", "#27ae60");
      $(this).animate({
            'marginLeft' : "+=40px" //moves to on

            })
      break;
    case switchposition = 3:
      switchposition = 1;
      $("#switchLabel").empty();
      $("#switchLabel").append("<h3>OFF</h3>");
      $("#handle").css("background", "#fcfff4");
      $(this).animate({
            'marginLeft' : "-=80px" //moves to off
            })
      break;

  }
})
