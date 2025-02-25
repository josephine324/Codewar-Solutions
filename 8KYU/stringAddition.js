function joinStrings(string1, string2){
    if(string1==Number){
        string1.toString();
    }
    if (string2==Number){
        string2.toString();
    }
    return `${string1}${string2}`;
 }
 console.log(joinStrings("Joh",43));
 //So this is my thought process if the input is a number change it a string and then join then else if they are all strings just join them