let arr = [10, 100, 4, 6, 90, 40, 202]

let newArr = arr.sort( (a,b) => { return a-b } )
//Ascending
//a - b => positve, a>b => swapping
//a - b => negative, a<b => noswapping

console.log(newArr);
//Descending
//b - a => posituve, b>a => swapping
//b - a => negative, b<a => noswapping
let arr1 = [ 10, 300, 50, 3, true, "100A" ]

let descendingSort = arr1.sort((a, b) => {return b-a})

console.log(descendingSort);

//Some and Every

//Some is same as logical or

let arr2 = [ 1,2,3,4,5 ]

let val = arr2.some((value, index, array) => {
    return value%2 ==0
})

console.log(val);

//Every is same as  logical and

let val2 = arr2.every((value, index, array) => {
    return value%2 == 0
})

console.log(val2);
