function rot13(message){
    return message.split("").map(char=>{
        const code = char.charCodeAt(0);//starting point
        if(code >=97 && code<=122){
            return String.fromCharCode(((code-97 + 13) %26)+97);// now here in the bracket we get the number the unicode value and now we have to change it to a string
        }
        if(code>= 65 && code <=90){
            return String.fromCharCode(((code-65+13) %26) +65);
        }
        return char;
    }).join("")
}
  //First put acondition that the letters to be ciphered are the ones in the know alphabets so it is just getting that character +13 but then for special charactersyou just skip them

  console.log(rot13("Hello I am trying so hard"))