function insertCharAfterWords(sentence, char) {
    return sentence.split(" ").reduce((acc, word, index) => {
        acc.push(word);
        if ((index + 1) % 3 === 0) acc.push(char);
        return acc;
    }, []).join(" ");
}

// Test Cases
console.log(insertCharAfterWords("The quick brown fox jumps over the lazy dog", "*"));
// "The quick brown* fox jumps over* the lazy dog*"

console.log(insertCharAfterWords("I love JavaScript programming", "#"));
// "I love JavaScript# programming"

console.log(insertCharAfterWords("Exploration of the cosmos is fascinating", "!"));
// "Exploration of the! cosmos is fascinating!"
