console.log('jq workin like yo mama');

var switchposition = 1;
$("#switchLabel").html("inactive");

$("#handle").click(function() {
  console.log('click click');
  console.log(switchposition);
  switch (switchposition) {
    case switchposition = 1:
      switchposition = 3;
      $("#switchLabel").empty();
      $("#switchLabel").append("<h3>ON</h3>");
      $(this).animate({ 'marginLeft' : "+=40px"})
      $("#divColor").animate({ 'opacity' : "1"})
      break;

    case switchposition = 3:
      switchposition = 1;
      $("#switchLabel").empty();
      $("#switchLabel").append("<h3>OFF</h3>");
      $(this).animate({ 'marginLeft' : "-=40px"})
      $("#divColor").animate({ 'opacity' : "0"})

      break;

  }
})
