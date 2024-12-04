function sumOfMinimums(arr) {
    let totalSum =0;
    for(row of arr) {
      const minValue = Math.min(...row);
      totalSum+=minValue;
    }
    return totalSum;
  }
  console.log(sumOfMinimums([
    [1,3,4,6,8,67.98],
    [65,23,41,23,12,11],
    [1,3,2,5,6]
  ]));