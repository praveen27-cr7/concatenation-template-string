let arr = [1, 2, 3, 4, 5]
let arr1 = [10, 20, 30, 40, 50]

//Concat method

let newArr = arr.concat(arr1)
let newArr1 = arr.concat( 10, 20, 30)
let newArr2 = [].concat(arr)

arr[0] = 111

console.log( newArr, newArr1 );
console.log(newArr2, arr)

//slice method

let arr3 = [ 10, 2, 3, 4, 5, 6, 7, 8 ]

let slicedArr = arr3.slice()

let slicedVal = arr3.slice( 1, 6 )
//                         (start, end-1)

console.log(slicedVal);

//Flat method 

let valArr = [ 1, 2, 3, [ 4, 5, 6, [7, 8, [9, 10, [11, 12]]] ] ]

 let flatArr = valArr.flat(2) // count the nestArr
 let flatArr1 = valArr.flat(Infinity)

console.log( valArr, flatArr, flatArr1 )

//Fill method 
 let arr5 = [ 20, 30, 40  ]
arr5.fill( 100, 1, 2 )
arr5.fill( 101 , 2 , 3)

console.log(arr5 );
