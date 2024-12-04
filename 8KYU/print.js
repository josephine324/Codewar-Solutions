/*  Complete the function that receives as input a string, and produces outputs according to the following table:

Input	Output
"Jabroni"	"Patron Tequila"
"School Counselor"	"Anything with Alcohol"
"Programmer"	"Hipster Craft Beer"
"Bike Gang Member"	"Moonshine"
"Politician"	"Your tax dollars"
"Rapper"	"Cristal"
anything else	"Beer"
Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".

*/
/* You get all the inputs and first change it to uppercase or even lower case which means whatever input you get will first be changed to desired characters . Then that new variable niyo urimo gucompara.*/
function getDrinkByProfession(param) {
    // Convert input to lowercase for case-insensitive comparison
    const UpperCaseParam = param.toUpperCase();
  
    switch (UpperCaseParam) {
      case "JABRONI":
        return "Patron Tequila";
        break;
      case "SCHOOL COUNSELOR":
        return "Anything with Alcohol";
        break;
      case "PROGRAMMER":
        return "Hipster Craft Beer";
        break;
      case "BIKE GANG MEMBER":
        return "Moonshine";
        break;
      case "POLITICIAN":
        return "Your tax dollars";
        break;
      case "RAPPER":
        return "Cristal";
        break;
      default:
        return "Beer";
    }
  }
  
  console.log(getDrinkByProfession("politician"));  // Output: "Your tax dollars"
  console.log(getDrinkByProfession("JABRONI"));     // Output: "Patron Tequila"
  console.log(getDrinkByProfession("Unknown"));     // Output: "Beer"

  /* 
  I was given advice to write down my thought process */