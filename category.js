/* // Write a function that takes an array of objects, where each object has a category property and a value property (which is a number).
//  The function should return a new object where the keys are the categories and the values are the sum of the value properties for that category.

// const data = [
//     { category: "A", value: 10 },
//     { category: "B", value: 20 },
//     { category: "A", value: 15 },
//     { category: "C", value: 5 },
//     { category: "B", value: 25 },
//   ];
// console.log(aggregated); // Output: { A: 25, B: 45, C: 5 }
*/
/* so you need to go through the object and change the key value pairs*/
/*Now you will need to create an empty object and now bring in new entries */
/*if category exists in new object add the value if not enter a new entry*/ 
function categoryAdd(data) {
    const newObj = {}; 

    data.forEach(item => {
        const { category, value } = item; 
        
        if (newObj[category]) {
            newObj[category] += value; 
        } else {
            newObj[category] = value;
        }
    });

    return newObj; 
}

const data = [
    { category: "A", value: 10 },
    { category: "B", value: 20 },
    { category: "A", value: 15 },
    { category: "C", value: 5 },
    { category: "B", value: 25 },
];

console.log(categoryAdd(data)); 
