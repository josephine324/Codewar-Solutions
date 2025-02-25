function differenceInAges(ages){
    const biggestAge= Math.max(ages);
    const smallAge= Math.min(ages);
    const difference = ages.reduce((biggestAge, smallAge)=> biggestAge-smallAge, 0)
    return [biggestAge, smallAge, difference];
  }

// first thing a method to find the difference between numbers 
// reduce returns a single value which can be the difference 
//nnh use sorting to find the  highest number use math.max and math.min and then use reduce to find one value
console.log(differenceInAges([32,12,7,45,13]))