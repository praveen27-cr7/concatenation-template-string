let veg = [ "Onion", "Tomato", "Carrot", "Beetroot" ]

/* for (let i = 0; i < veg.length; i++) {
    const element = veg[i];
    console.log(element);   
} */
// foreach method didnt return the value
veg.forEach(printveg )

function printveg (currentElement, index, totalarray) {
    console.log(currentElement, index, totalarray);
    
}

//Map Method - return the new value

veg.map( function(currentEle, index, totalArray ){
     console.log(currentEle, index, totalArray);
     
} ) 

// foreach method didnt return the value


let newArr = veg.forEach((value) => {
    console.log(value.toUpperCase())
    return value
})

console.log(newArr);

//Map Method - return the new value
let newArr1 = veg.map((value, index) => {
    return { id: index+1, veg : value }
})

console.log(newArr1);

//Chaining Method 

let arr = veg.map(value => value.toUpperCase()).sort().fill("Apple")

console.log(arr);

/* let arr1 = veg.forEach(value => value.toUpperCase()).sort().fill("Apple")//chaining method is not possible

console.log(arr1) */

let arr2 = veg.map( (cEle) => { return cEle == "Onion" } )

console.log( arr2 );


veg.forEach((value) => { console.log( value == "Tomato" );
 })