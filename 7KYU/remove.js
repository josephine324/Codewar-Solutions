/* Define a method/function that removes from a given array of integers all the values contained in a second array.

Examples (input -> output):
* [1, 1, 2, 3, 1, 2, 3, 4], [1, 3] -> [2, 2, 4]
* [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8], [1, 3, 4, 2] -> [5, 6, 7, 8]
* [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3], [2, 4, 3] -> [8, 7, 6, 5, 1] */
function removeduplicate (arr1,arr2) {
    let result= [];
    for (num of arr1) {
        if(!arr2.includes(num)) {
            result.push(num);
        }
    }
    return result;
}
console.log(removeduplicate([1,3,4,5,6,2,3,4,5], [1,2,3,4,5]));

function removeduplicate(arr1, arr2) {
    let result= arr1.filter(num=>!arr2.includes(num));
    return result;
}
/*This filter method is being applied on arr1 so this means  remain with numbers which are not in num 2 */ 
/*  Includes elements in the resulting array only if they are not in values_list.
 Includes elements in the resulting array only if they are not in arr2. Meaning if not in the second array write it down*/