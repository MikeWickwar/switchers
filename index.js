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
      $("#handle").css("background-image", "-webkit-radial-gradient(center, circle cover, #00C429, #009A0C)");
      $(this).animate({
            'marginLeft' : "+=80px" //moves to on
            })
      break;
    case switchposition = 2:
      switchposition = 3;
      $("#switchLabel").empty();
      $("#switchLabel").append("<h3>ON</h3>");
      $("#handle").css("background-image", "-webkit-radial-gradient(center, circle cover, #00C429, #009A0C)");
      $(this).animate({
            'marginLeft' : "+=40px" //moves to on

            })
      break;
    case switchposition = 3:
      switchposition = 1;
      $("#switchLabel").empty();
      $("#switchLabel").append("<h3>OFF</h3>");
      $("#handle").css("background-image", "-webkit-radial-gradient(center, circle cover, #FF0C00, #D32219)");
      $(this).animate({
            'marginLeft' : "-=80px" //moves to off
            })
      break;

  }
})
