$(document).ready(function() {
  $("form#question").submit(function(event) {
    event.preventDefault();
    const numInt = parseInt($("input#num").val());
    

    // Specs //

    // write a function that takes a number and returns a range from 0 to that user input number in an array. //

    function numArr (number) {
      newArr = [];
      for (let index = 0; index <= number; index+=1){
        newArr.push(index);
        console.log(newArr);
      }
    }
  
    // Spec test for most important rule//
    // If a number containes 3, the entire number is replaced with "wont you be my neighbor".//

    newArr.forEach(function(number) {
      if ((number+'').indexOf('3') > -1) {
        number = "Won't you be my neighbor?"
      }
    });
    

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