// so my task is going through the array aand then I find the biggest sum
// using Kadane's algorithm

// var maximumSum = function(arr){
//     let maxSum = 0;
//     let currentSum =0;
//     arr.forEach((number) =>{
//         currentSum = Math.max(0, currentSum + number);
//         // Math.max takes in several arguments and then compares them and outputs the biggest value
//         maxSum= Math.max(maxSum, currentSum)
//     })
//     return maxSum;
// }
// console.log(maximumSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

//
function maxSequence(arr){
    let maxSum =0;
    let currentSum =0;
    arr.reduce((_accumulator, number) =>{// the underscore means I am not using the variable we can ignore it for now so that it doesn'tt cause errors of it not being used
        currentSum = Math.max(0, currentSum + number );
        maxSum = Math.max(maxSum,currentSum)
    },0)
    return maxSum
}
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))