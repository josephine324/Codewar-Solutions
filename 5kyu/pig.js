/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway ! */
/*First Ithink I will have to split it and then put the first later at the end and then add ay */
/* So you have to slice the word an dthen put it last and then add the word ay */
function pigIt(str) {
  return str
    .split(' ')
    .map(word => {
      // Check if the word is a single non-letter character (likely punctuation)
      if (word.length === 1 && !isLetter(word)) {
        return word;
      }
      // Move the first letter to the end and add "ay"
      return word.slice(1) + word[0] + 'ay';
    })
    .join(' ');
}
console.log(pigIt("hen"));