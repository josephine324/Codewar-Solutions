function broken(x){
    return x.split("").map(char=>char=== "1"? "0": "1").join("");
  }
  console.log(broken("10101010101010"));