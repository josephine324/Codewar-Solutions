function dirReduc(arr){
    const stack = [];
    const opposites = {
        NORTH: "SOUTH",
        SOUTH: "NORTH",
        EAST: "WEST",
        WEST: "EAST"
      };

      for(let dir of arr){
        if(stack.length>0 && opposites[dir]===stack[stack.length-1]){
            stack.pop();
        } else{
            stack.push(dir);
        }

      }
      return stack;
}
console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]))