function findDiscounted(prices) {
    const prices = input.split(" ").map(Number);
    
    const discountedPrices = [];
    const unmatchedInitialPrices = new Set();
  
    for (const price of prices) {
      if (unmatchedInitialPrices.has(price / 0.75)) {
        discountedPrices.push(price);
        unmatchedInitialPrices.delete(price / 0.75); 
      } else {
        unmatchedInitialPrices.add(price);
      }
    }
  
    return discountedPrices.join(" ");
  }
  
  // Example Usage
  console.log(filterDiscountedPrices("15 20 60 75 80 100")); // Output: "15 60 75"
  console.log(filterDiscountedPrices("9 9 12 12 12 15 16 20")); // Output: "9 9 12 15"
  