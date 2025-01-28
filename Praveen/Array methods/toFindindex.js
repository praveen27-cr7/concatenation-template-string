let arr = [ 10, 20, 30, 20, 40, 50, 10 ]
//.indexOf(searchElement, fromIndex)

let newIndex = arr.indexOf(10, -6 )// search left to right

console.log( newIndex );

//.lastIndexOf(searchElement, fromIndex)

let lastIndex = arr.lastIndexOf(20, 2)// search right to left

console.log(lastIndex);
