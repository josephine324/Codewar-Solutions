function stringy(size) {
    let result = ""; // Start with an empty string
  
    // Loop from 1 to the size
    for (let i = 1; i <= size; i++) {
      if (i % 2 === 1) { // Check if the index is odd
        result += "1";   // Add "1" for odd positions
      } else {
        result += "0";   // Add "0" for even positions
      }
    }
  
    return result; // Return the final string
  }
  
  // Test the function
  console.log(stringy(6));  // Output: "101010"
  console.log(stringy(4));  // Output: "1010"
  console.log(stringy(12)); // Output: "101010101010"
  