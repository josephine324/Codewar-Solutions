/* check whetehr the sum of squares is greater than cubes in b
*/
function arrayMadness(a, b) {
    // Calculate the sum of squares for array `a`
    let sumOfSquares = a.map(num => Math.pow(num, 2)).reduce((acc, currentValue) => acc + currentValue, 0);
  
    // Calculate the sum of cubes for array `b`
    let sumOfCubes = b.map(num => Math.pow(num, 3)).reduce((acc, currentValue) => acc + currentValue, 0);
  
    // Compare the sums
    return sumOfSquares > sumOfCubes;
  }
  
  console.log(arrayMadness([3, 1, 3, 4], [3, 5, 1, 2])); // Output: false
  