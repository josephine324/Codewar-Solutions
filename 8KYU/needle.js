// // so if you want to fnd the position of something in an array you can use indexOf
// function findNeedle(haystack) {
//     const position = haystack.indexOf("needle");
//     return `found the needle at position ${position}`;
// }
// //an array is a group of different objects
// console.log(findNeedle(["heaven","earth","needle","Lord"]));
// //another method using find method
// //find method retrieves the element itself an now the next step is knowing the location of the that element
// //literally find goes through the array and finds something equal to the needle you are looking for
function findNeedle(haystack){
    const needle= haystack.find(item=>item==="needle");
    const position = haystack.indexOf("needle");
    return `found needle at ${position}`;
}
console.log(findNeedle(["earth", "heaven", "hair", "needle"]));