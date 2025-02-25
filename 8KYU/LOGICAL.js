//go through the array and compare the cconsecutive boolean and use the operator on them
function  logicalCalc(array, op) {
    return array.reduce((result,currentValue)=> {
        if(op=== "AND"){
            return result && currentValue;
        } else if (op=== "OR"){
            return result || currentValue;
        } else if (op==="XOR"){
            return result !==currentValue;
        } else {
            throw new Error("Invalid operator. Use 'AND', 'OR', or 'XOR'.");  
        }
    });
}
console.log(logicalCalc([true,true,false,true], "AND"));