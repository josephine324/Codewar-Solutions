function minimumSteps(numbers, value) {
    // Step 1: Sort the array in ascending order
    numbers.sort((a, b) => a - b);
  
    // Step 2: Initialize variables
    let sum = 0;
    let steps = 0;
  
    // Step 3: Add smallest numbers until sum >= k
    for (let num of numbers) {
      sum += num;
      if (sum >= value) {
        return steps; // Return steps when condition is met
      }
      steps++;
    }
  }
  
  // Example usage
  console.log(minimumSteps([1, 10, 12, 9, 2, 3], 6));  // Output: 2
  console.log(minimumSteps([8, 9, 4, 2], 23));         // Output: 3
  console.log(minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464)); // Output: 8
  