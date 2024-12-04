function calculateYears(P, I, T, D) {
    let years = 0;
  
    while (P < D) {
      // Calculate the yearly interest after tax and update the principal
      let interest = P * I; // Yearly interest
      let netInterest = interest * (1 - T); // Net interest after tax
      P += netInterest; // Update principal
  
      years++; // Increment year count
    }
  
    return years;
  }
  
  // Example usage:
  console.log(calculateYears(1000, 0.05, 0.18, 1100)); // Outputs: 3
  console.log(calculateYears(1000, 0.05, 0.18, 1200)); // Outputs: 6
  console.log(calculateYears(1000, 0.05, 0.18, 1000)); // Outputs: 0
  