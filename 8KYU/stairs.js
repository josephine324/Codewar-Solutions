function stairsIn20(stairs) {
    const oneYearTotal = stairs.reduce((yearSum, day) => {
      return yearSum + day.reduce((daySum, stairsCount) => daySum + stairsCount, 0);
    }, 0);
    const twentyYearEstimate = oneYearTotal * 20;
    
    return twentyYearEstimate;
}
console.log(stairsIn20([
  [10, 20, 30], // Sunday
  [15, 25, 35], // Monday
  [20, 30, 40], // Tuesday
  [25, 35, 45], // Wednesday
  [30, 40, 50], // Thursday
  [35, 45, 55], // Friday
  [40, 50, 60]  // Saturday
]));


  