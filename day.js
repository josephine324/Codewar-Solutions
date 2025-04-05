const salesReport = {
    "sales": [
      [100, 150, 200, 200, 200, 180, 150, 120],  
      [300, 320, 300, 300, 320, 320, 320, 350], 
      [500, 500, 450, 450, 450, 450, 500, 500],  
      [600, 750, 750, 800, 800, 800, 750, 600],  
      [900, 950, 950, 900, 900, 1000, 1000, 1000] 
    ]
  };
  
  // Function to get the most frequent sales amount for each day
  function getMostFrequentSales(salesReport) {
    return salesReport.sales.map(daySales => {
      const frequencyMap = {};  // To count frequency of each sales amount
      let maxFrequency = 0;  // Track the maximum frequency
      let mostFrequentSale = null;  // To store the most frequent sale
  
      // Loop through each sale amount of the day
      for (let i = 0; i < daySales.length; i++) {
        const sale = daySales[i];
        // Increment the frequency of the sale amount
        frequencyMap[sale] = (frequencyMap[sale] || 0) + 1;
  
        // If the current sale has a higher frequency or is a tie but comes later, update it
        if (frequencyMap[sale] > maxFrequency || 
            (frequencyMap[sale] === maxFrequency && i > daySales.indexOf(mostFrequentSale))) {
          maxFrequency = frequencyMap[sale];
          mostFrequentSale = sale;
        }
      }
  
      return mostFrequentSale;
    });
  }
  
  // Run the function on the sales report
  const mostFrequentSales = getMostFrequentSales(salesReport);
  
  console.log(mostFrequentSales); // Output should be [200, 320, 450, 750, 1000]
  