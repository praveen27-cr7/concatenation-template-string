//Deep copy is called independent copy

let a = 10;

let b = a;

a = 20

console.log( a, b );

let obj1 = {
    name1 : "Praveen",
    role : "Developer"
}


let obj2 = {...obj1}

obj2.name1 = "Ronaldo"

console.log( obj1, obj2 );


//Object Shallow Copy

let person = {
    name1 : "John",
    role :  "Youtuber",
    hobbies : {
        cricket : "Batsman",
        football : "Striker"
     }
}
 
//Deep Copy
let person2 = {...person, hobbies : {...person.hobbies}}



//let person3 = JSON.stringify( person )  //-- convert string

let newObj = JSON.parse( JSON.stringify(person) )   // -- convert string into object  -- independent copy / deep copy
person.role = "FrontEnd"
person.hobbies.cricket = "Bowler"

console.log( person, person2 );


console.log( newObj );

//Array shallow copy
let arr = [ 1, 2, 3, [4, 5, 6]]

let arr1 = [ ...arr ]

//Deep Copy
let newArr = JSON.parse( JSON.stringify(arr ) )

arr[0] = "One"
arr[3][0] = 100

newArr[3][1] ="Five"
//let newArr = JSON.stringify( arr ) -- independent copy / deep copy


console.log( arr , arr1 );
console.log( newArr )