let person ={
    pName : "Praveen",
    age : 20
} 

console.log(person)

//Object.create

  let newObj = Object.create( person )
  newObj.location = "Chennai"

  console.log( newObj.__proto__ );
  console.log(Object.getPrototypeOf(newObj) );
  
  console.log( newObj.age );

  console.log(newObj );
  

//Object.assign - merging two object

let person1 = {
    id : "IW234",
    name1: "Ronaldo"
}

let newObj1 = Object.assign( person1, { role : "Front end Devepoler", salary: 1000 } )

console.log( person1 );
console.log( newObj1 );

//Object.entries() values converting array

 let employee = {
    eName : "Dhoni",
    eRole : "Backend Devepoler"
 }

 let multiArr = Object.entries(employee)
 multiArr.push(["Name", "RONALDO"])

 console.log( multiArr );
 
//Object.fromEntries opp to entires converting normal object - array to object

let normalObj = Object.fromEntries( multiArr )

console.log(normalObj);


//Object.keys()

let onlyKeys = Object.keys( normalObj )
console.log(onlyKeys);


//Object.values()

let onlyValues = Object.values(normalObj)
console.log(onlyValues);


//Object.freeze

let newObj2 = {
    id : 27
}

Object.freeze(newObj2)

newObj2.name1 = "Javascript"// did not add because object is freeze
console.log(newObj2);

//objext.isFrozen - checking the obj is freeze or not

console.log( Object.isFrozen(newObj2) );
console.log( Object.isFrozen(newObj1) );



