function upArray(arr){
    if (arr.length===0 || arr.some(num => num < 0 || num >9 || !Number.isInteger(num))) return null;
  for (let i=arr.length-1; i>=0; i--){ //you are moving from right to left
    if (arr[i]<9){
      arr[i]+=1;
      return arr;// This simply means if the number at as pecifiv
    }
    arr[i]=0;
  }
  return [1, ...arr];
  }
  console.log (upArray([9,9,9]));