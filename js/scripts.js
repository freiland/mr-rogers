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
        //console.log(newArr);
      }
    }

    numArr(numInt);
  
    // Spec test for most important rule//
    // If a number contains 3, the entire number is replaced with "wont you be my neighbor".//
    
    let secArr = [];
    newArr.forEach(function(number) {
      
      if ((number+'').indexOf('3') > -1) {
        secArr.push("Won't you be my neighbor?");
      }
      else {
        secArr.push(number);
      }
      console.log(secArr);
    });
    
    // Spec test //
    // Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"//

    let thirdArr = [];
    secArr.forEach(function(number) {
      if ((number+'').indexOf('2') > -1) {
        thirdArr.push("Boop!");
      }
      else {
        thirdArr.push(number);
      }
      console.log(thirdArr);

    })

    // Spec test//
    //Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"//

    let fourArr = [];
    thirdArr.forEach(function(number) {
      if ((number+'').indexOf('1') > -1) {
        fourArr.push("Beep!");
      }
      else {
        fourArr.push(number);
      }
      console.log(fourArr);

    });
    
    
    
    
    
      
    let finalArr = fourArr.join(", "); 
    $("#newnum").text(finalArr);
  })    
});

