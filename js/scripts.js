$(document).ready(function() {
  $("form#question").submit(function(event) {
    event.preventDefault();
    const numInt = parseInt($("input#num").val());
    
  

    if (( ageInt % 3 === 0) || (favNumInt % 7 === 0)) {
      $("#go").hide();
      $("#rust").hide();
      $('#ruby').hide();
      $("#python").fadeIn(2000, function() {
        
      });
    }

    else if ((graduationInt < 1980) || (graduationInt % 3 === 0))  {
      $("#python").hide();
      $("#ruby").hide();
      $("#rust").hide();
      $("#go").fadeIn(2000, function() {
        
      });
    }

    else if (workLocInt === 1)  {
      $("#python").hide();
      $("#ruby").hide();
      $("#go").hide();
      $("#rust").fadeIn(2000, function() {
        
      });
    }

    else if (compSizeInt === 1)  {
      $("#python").hide();
      $("#ruby").hide();
      $("#rust").hide();
      $("#go").fadeIn(2000, function() {
        
      });
    }

    else {
      $("#python").hide();
      $("#rust").hide();
      $("#go").hide();
      $('#ruby').fadeIn(2000, function() {
        
      });
    }
  });
});