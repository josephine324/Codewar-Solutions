function sqlJoin(arr1,arr2, key= "id"){
    return arr1.map(obj1 => {
        const match = arr2.find(obj2 => obj1[key]=== obj2[key]);
        return match?{...obj1, ...match}:null;// The reason for null is if there is no match seen then  then undefined or null because .map property exepects an arry from wherever it is applied.
    }).filter(item => item !== null);
}
const employees = [
    { id: 1, name: 'John', department: 'IT' },
    { id: 2, name: 'Jane', department: 'HR' },
    { id: 3, name: 'Doe', department: 'IT' }
];
const salaries = [
    { id: 1, salary: 50000 },
    { id: 2, salary: 60000 },
    { id: 4, salary: 55000 }
];
console.log(sqlJoin(employees,salaries));