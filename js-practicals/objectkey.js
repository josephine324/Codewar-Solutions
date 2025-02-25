function transformKeys(obj) {
    const result = {};
    for(key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key.toUpperCase()]= obj[key];
        }
    }
    return result;
}
console.log(transformKeys({name: "Joh", age: 15, relationship: "single"}));