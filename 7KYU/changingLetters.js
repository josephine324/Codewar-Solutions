// function capitalize (str) {
//     const vowels = "aeiou";
//     let result = "";
//     for (char of str) {
//         if (vowels.includes(char)) {
//             result = result+ char.toUpperCase();
//         } else {
//             result = result + char;
//         }
//     }
//      return result;
// }
// console.log(capitalize("Hello Josephine"));

//another solu
function swap (str) {
    return str.replace(/[aeiou]/g, (match) => match.toUpperCase());
}
console.log(swap("Hello Josephine"));