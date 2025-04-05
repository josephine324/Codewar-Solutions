function duplicateEncode(word) {
    let lowered = word.toLowerCase(); // Convert to lowercase
    let charCount = {}; // Frequency counter object

    // Step 1: Count occurrences of each character
    for (let char of lowered) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Step 2: Replace each character based on its frequency
    return lowered.split("").map(char => 
        charCount[char] > 1 ? ")" : "("
    ).join("");
}

console.log(duplicateEncode("din"));      // "((("
console.log(duplicateEncode("recede"));   // "()()()"
console.log(duplicateEncode("Success"));  // ")())())"
console.log(duplicateEncode("(( @"));     // "))(("
