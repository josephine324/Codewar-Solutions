/*The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false */

/* This is my thought process group each word separately and then split it and the capitalize the letter at index o and then Join all the words and place hashtag at the very beginning . if  */
function generateHashtag (str) {
    let words=str.trim().split(/\s+/);
    if(words.length===0 || str.trim()===""){
        return false;
    }
    let capitalizedWords= words.map(word=>{
        return word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
    }

    )
    let hashtag= "#"+ capitalizedWords.join("")
    if (hashtag.length > 140) {
        return false;
    }
    return hashtag

}
console.log(generateHashtag("Hello there thanks for trying my Kata"))