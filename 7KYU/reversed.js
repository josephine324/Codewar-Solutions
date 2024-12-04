/* Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained. */
function reverseWords(str) {
    let words = str.split(' ');
    let reversedword= words.map(word => word.split('').reverse().join(''));
    return reversedword.join(' ');
    
  }
  console.log(reverseWords("This is an example!"));