/* 
 Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ).

Examples
x = 1, n = 10 --> [1,2,3,4,5,6,7,8,9,10]
x = 2, n = 5  --> [2,4,6,8,10]*/
/*  for loops through arrays and I had just given a single number. And when you know you are going to return a single array you have to have the result aside*/
function multiple (x,n) {
    let result= [];
    for (let i=1; i<=n; i++) { // This i moves through the array and gets a number from that array
        result.push(x*i);
    }
    return result;
}
console.log(multiple(2,6));
