function pipeFix(numbers){
    const fixedPipe= [];
    const minValue = Math.min(...numbers);
    const maxValue = Math.max(...numbers);
    for (let i=minValue; i<=maxValue; i++) {
      fixedPipe.push(i);
    }
    return fixedPipe;
  }
  console.log(pipeFix("1,3,5,6,7.8"));