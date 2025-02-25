function solve(arr) {
    const positive = arr.filter(num => num > 0);
    const negative = arr.filter(num => num < 0);
    
    for (let num of positive) {
      if (!arr.includes(-num)) {
        return num; 
      }
    }
  
    for (let num of negative) {
      if (!arr.includes(-num)) {
        return num;
      }
    }
  }
  