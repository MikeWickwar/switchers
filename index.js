console.log('jq workin like yo mama');

var switchposition = 2;

$("#handle").click(function() {
  console.log('click click');
  console.log(switchposition);
  switch (switchposition) {
    case switchposition = 1:
      switchposition = 3;
      $(this).animate({
            'marginLeft' : "+=80px" //moves to on
            })
      break;
    case switchposition = 2:
      switchposition = 3;
      $(this).animate({
            'marginLeft' : "+=40px" //moves to on
            })
      break;
    case switchposition = 3:
      switchposition = 1;
      $(this).animate({
            'marginLeft' : "-=80px" //moves to off
            })
      break;

  }
})
