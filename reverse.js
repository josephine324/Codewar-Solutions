function reverseObject(obj) {
    const reversed = {};
    
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            reversed[obj[key]] = key; 
        }
    }

    return reversed;
}

// Example usage
const originalObj =  {name:"Joh", age: 23, status: "Student"};
const reversedObj = reverseObject(originalObj);

console.log(reversedObj); 
