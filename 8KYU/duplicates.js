/*  Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

The order of the sequence has to stay the same.

Examples:

Input -> Output
[1, 1, 2] -> [1, 2]
[1, 2, 1, 1, 3, 2] -> [1, 2, 3]*/
function removeduplicate(arr) {
    const result= [];
    for ( let num of arr) {
        if(num.indexOf()==-1){
            result.push(num);
        }
    }
    return result;
}
console.log(removeduplicate([1,2,2,3,4,5]));