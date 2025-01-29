let arr = [1,2,3,4,5 ]

let totalval = 0
for (let i = 0; i < arr.length; i++) {
     totalval = totalval + arr[i]    
}

console.log(totalval);

let totalVal1 = arr.reduce( (acc, cEle, index, array) => {
     return acc + cEle
} , 0)
console.log(totalVal1);

let employees = [
    {eName : "Praveen", salary : 1000},
    {eName : "Ronaldo", salary : 10000},
    {eName : "Dhoni", salary : 20000},
    {eName : "Kholi", salary : 25000}
]

let totalSalary = employees.reduce( (acc, value, index, array) => {
    return acc + value.salary
},0 )

console.log(totalSalary);

