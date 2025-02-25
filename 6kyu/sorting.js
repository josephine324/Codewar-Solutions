//so you first find the sum of the elements in an array
//then you rearrange things in the array
// now the last step is now rearring the sum ascendingly and then now give the final putput
function deepSort(arr, asc) {
    // Helper function to calculate the sum of an element
    const sum = (element) => {
        if (Array.isArray(element)) {
            // If the element is an array, recursively compute the sum of its elements
            return element.reduce((total, item) => total + sum(item), 0);
        }
        return element; // If it's a number, return it as-is
    };

    // Recursive function to sort nested arrays
    const recursiveSort = (array, asc) => {
        /*is is similar like saying function recursiveSort(array,asc){
        return array.} */
        return array
            .map((element) =>
                Array.isArray(element)
                    ? recursiveSort(element, asc) // Recursively sort nested arrays
                    : element
            )
            .sort((a, b) => {
                // Sort by comparing sums
                return asc ? sum(a) - sum(b) : sum(b) - sum(a);
            });
    };

    return recursiveSort(arr, asc);
}

console.log(deepSort([2,8,[3,6,2],[2,4,2,1]]));