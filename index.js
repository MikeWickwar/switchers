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
      $("#handle").css("background-image", "linear-gradient(#83c783 0%, #52b152 40%, #008a00 100%)")
                  .css("box-shadow", "inset 0px 1px 1px #b4ddb4, 0px 1px 3px #b4ddb4");
      $(this).animate({ 'marginLeft' : "+=80px" })
      break;
    case switchposition = 2:
      switchposition = 3;
      $("#switchLabel").empty();
      $("#switchLabel").append("<h3>ON</h3>");
      $("#handle").css("background", "#fcfff4")
                  .css("background", "linear-gradient(#83c783 0%, #52b152 40%, #008a00 100%)")
                  .css("box-shadow", "inset 0px 1px 1px #b4ddb4, 0px 1px 3px #b4ddb4");
      $(this).animate({
            'marginLeft' : "+=40px" //moves to on
             })
      break;
    case switchposition = 3:
      switchposition = 1;
      $("#switchLabel").empty();
      $("#switchLabel").append("<h3>OFF</h3>");
      $("#handle").css("background", "#c0c0c0");
      $(this).animate({
            'marginLeft' : "-=80px" //moves to off
            })
      break;

  }
})
