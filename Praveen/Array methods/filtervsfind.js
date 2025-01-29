let employees = [
    { empName : "Praveen", salary : 200000 },
    { empName : "Ronaldo", salary : 300000 },
    { empName : "Dhoni", salary : 250000 }
]

//filter received multiple .value

let filteredData = employees.filter( (val, index, array) =>
    {   console.log(index);
       return val.salary>210000 }).fill( {id: 1, name:"xyz"} )

employees.filter( val => console.log(val))

console.log(filteredData);


//find received single value

let findData = employees.find( (val, index, array) => {
    console.log(index);
    
    return val.salary>210000} )

console.log(findData);

