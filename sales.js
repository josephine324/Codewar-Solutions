function mostFrequentSales(salesReport){
  return salesReport.sales.map(daySales=>{
    let count = {}; // keeps the frequency of sales (like how many times a specific sale has appeared)
    let maxFreq= 0;
    let mostFrequent = null;
    for (let i=0; i< daySales.length; i++){
      let sale= daySales[i];// this retrieves the sales at that index
      count[sale]= (count[sale] || 0) +1;
      if(count[sale]> maxFreq || (count[sale]===maxFreq) && i> daySales.lastIndexOf(mostFrequent)) {
        maxFreq = count[sale];
        mostFrequent = sale;
      }
    }
    return mostFrequent;
  })
}
const salesReport = {
  "sales": [
  [100, 150, 200, 200, 200, 180, 150, 120],  
  [300, 320, 300, 300, 320, 320, 320, 350], 
  [500, 500, 450, 450, 450, 450, 500, 500],  
  [600, 750, 750, 800, 800, 800, 750, 600],  
  [900, 950, 950, 900, 900, 1000, 1000, 1000] ]
  };
console.log(mostFrequentSales(salesReport));  