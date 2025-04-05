/*I think they basically want me to check if my function has certain properties or methods*/ 
/*We need to implement a method that checks this interface mean that checks that certain properties or methods exist
 */
/* My task was to jsut check if my object has those three functionsor methods*/
function isSantaClausable(obj) {
    if(obj.sayHoHoHo && obj.distributeGifts && obj.goDownTheChimney){
        if(typeof(obj.sayHoHoHo=== "function")&& typeof(obj.distributeGifts === "function") && typeof(obj.goDownTheChimney === "function"))
            return true;
    }
    return false;
  }
  let santa ={
    sayHoHoHo: function(){
        console.log("It yooo")
    },
    distributeGifts: function(){
        console.log("It interesting")
    },
    goDownTheChimney:  function(){
        console.log("It scary")
    },
  }
  console.log(isSantaClausable(santa));