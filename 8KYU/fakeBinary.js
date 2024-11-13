function fakeBin(x) {
    return x                   
      .split('')               
      .map(char => char < '5' ? '0' : '1') // Check each character: if it's less than '5', replace with '0'; otherwise, replace with '1'
      .join('');               // Join the array back into a string
  }
  
  console.log(fakeBin("45782")); 