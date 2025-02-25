function noonerize(numbers){
    if(!Array.isArray(numbers)|| numbers.length!==2 || numbers.some(num => typeOf num !== 'number' || !Number.isInteger(num))){
        return "inavalid array";
    }
}