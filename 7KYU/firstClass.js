function factory(x){
    return function(arr){
      return arr.map(num=> num * x);
      
    }  
  }
   var multipier= factory(7);
  var myArray= [2,3,4,5];
  console.log(multipier(myArray));