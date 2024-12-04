// Write a function insertCharAfterWords that takes a sentence and a special character as arguments. The function should return a new sentence with the special character inserted after every 3 words.
insertCharAfterWords("The quick brown fox jumps over the lazy dog", "*")
// "The quick brown* fox jumps over* the lazy dog*"

insertCharAfterWords("I love JavaScript programming", "#") 
// "I love JavaScript# programming"

insertCharAfterWords("Exploration of the cosmos is fascinating", "!")
// "Exploration of the! cosmos is fascinating!"

function insertCharAfterWords(sentence, char) {
    const words = sentence.split(" ");
    return words.map((word, index) => 
        (index + 1) % 3 === 0 ? word + char : word
    ).join(" ");
}

// Test cases
console.log(insertCharAfterWords("The quick brown fox jumps over the lazy dog", "*"));
// Output: "The quick brown* fox jumps over* the lazy dog*"

console.log(insertCharAfterWords("I love JavaScript programming", "#"));
// Output: "I love JavaScript# programming"

console.log(insertCharAfterWords("Exploration of the cosmos is fascinating", "!"));
// Output: "Exploration of the! cosmos is fascinating!"

