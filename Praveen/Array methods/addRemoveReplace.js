//addRemoveReplace

let arr = [100, 200, 300, 400]


let newArr = arr.pop()

console.log(arr , newArr)

arr.push(500, 550, 600)

console.log(arr);

let newArr1 = arr.shift()

console.log( arr, newArr1 );

arr.unshift(1, 2, 3)

console.log( arr );

//Splice

//splice( start, count,..items )

let newArr2 = [ 10, 20, 30, 40 ]

//newArr2.splice( 1, 2, "new val", true, [11, 12] )

newArr2.splice( 0, 0, 40, 200, 700)
newArr2.splice( -1, 0, 400, 2000, 900)

console.log( newArr2 );
