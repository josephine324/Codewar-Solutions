function deepEqualArray(arr1,arr2){
    if(arr1.length!==arr2.length) return false;
    //kugirango objects zibe equal they have to have the same objects and placed at the samae position so if arr passes the condition in the bracket 
    return arr1.every((obj1,index) => {
        const obj2 = arr2[index];
        return deepEqual(obj1,obj2);
    });
}
function deepEqual(obj1,obj2){
    if (obj1===obj2) return true;
    if(typeof obj1!=="object" || typeof obj2!== "object"|| obj2 === null || obj1 ===null) return false;
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) return false; 
    return keys1.every(key=>deepEqual(obj1[key],obj2[key]));
}
const array1= [
    { id: 1, name: "Alice", details: { age: 30, city: "New York" } },
    { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } }
];

const array2 = [
    { id: 1, name: "Alice", details: { age: 30, city: "New York" } },
    { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } }
];
console.log(deepEqualArray(array1,array2));