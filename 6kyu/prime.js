// first of all I have a list of integers
//the question is to find the minimum number to add so that I get the closest prime number
//Now the task is to first add the numbers in a list and then find the closest prime number now you can do the difference
function minimumN(number){
    //Try to find the sum of numbers in the list 
    number.reduce((a,b)=> a+b,0);

    //Next task find the closest prime number
    num= closestNumber-sum
    return num;

}
//first check if it is prime
function isPrime(num){
    if (num < 2) return false;
    for (i=2; i<=Math.sqrt(num); i++){
      if (num%i===0) return false;
    }
    return true;
  }
  
  function minimumNumber(numbers){
    let sum= numbers.reduce((acc,curr)=> acc +curr,0);
    let closestPrime = sum;
    while (!isPrime(closestPrime)) {
      closestPrime++;
    }
      return closestPrime-sum;
    }
  console.log(minimumNumber([2,4,5,6,7]));
  