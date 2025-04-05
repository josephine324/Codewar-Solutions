function sumAgesByDepartment(employees){
    const departmentAges = {};
    employees.forEach(employee=>{
        const{department,age} = employee;
        if(departmentAges[department]){// kureba niba iyo department iri muri iyo new object if yes add the age if not add the department
            departmentAges[department]+=age;
        } else {
            departmentAges[department]=age;
        }
    });
    return departmentAges;
}
const employees = [
    { name: 'Alice', age: 30, department: 'Engineering' },
    { name: 'Bob', age: 25, department: 'Marketing' },
    { name: 'Charlie', age: 35, department: 'Engineering' },
    { name: 'David', age: 40, department: 'HR' },
    { name: 'Eve', age: 28, department: 'Marketing' },
    ];
    
console.log(sumAgesByDepartment(employees));