

    
            
//____________________________Business Logic____________________________//
            
            
            
function numArr (number) {
  newArr = [];
  for (let index = 0; index <= number; index+=1){
    newArr.push(index);  }
  return newArr;
  }
            
            
            
            function hasThree (array) {
              let mastArr = [];
              array.forEach(function(number) {
                if ((number+'').indexOf('3') > -1) {
                  mastArr.push("Won't you be my neighbor?");
                }
                else {
                  mastArr.push(number);
                }
              })
              return mastArr;
            };

            function hasTwo (array) {
              let mastArr = [];
              array.forEach(function(number) {
                if ((number+'').indexOf('2') > -1) {
                  mastArr.push("Boop!");
                }
                else {
                  mastArr.push(number);
                }
              })
              return mastArr;
            };

            function hasOne (array) {
              let mastArr = [];
              array.forEach(function(number) {
                if ((number+'').indexOf('1') > -1) {
                  mastArr.push("Beep!");
                }
                else {
                  mastArr.push(number);
                }
              })
              return mastArr;
            };
                    
    
    // USER INTERFACE LOGIC // 
    $(document).ready(function() {
    
      $("form#question").submit(function(event) {
        event.preventDefault();
        const numInt = parseInt($("input#num").val());
        //let mastArr = [];
        let testArr = numArr(numInt);
        //let workArr = numArr(numInt);
        const one = hasThree(testArr);
        //console.log(one);
        let two = hasTwo(one);
        let three = hasOne(two);

    let finalArr = three.join(", ");
    $("#newnum").text(finalArr);
    

    //event.preventDefault();
    

  })    
});