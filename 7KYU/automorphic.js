function automorphic(n){
    const square = n * n;
    //changing them to strings
    let nStr = n.toString();
    let squareStr= square.toString();
    if (squareStr.endsWith(nStr)) {
      return "Automorphic";
    } else {
     return "Not!!"  
    }
  }
  console.log (automorphic(45));