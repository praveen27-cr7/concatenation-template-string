/* call by refernce


   Stack memory
   |  address  | Variable    | value -> Refernce/Pointer (address)  |
   |-------------------------|--------------------------------------|
   | 0*100     |   obj1      |    0*001                             | 
   | 0*104     |   arr1      |    0*002                             | 
   | 0*108     |   obj2      |   obj1 = 0*001                       |
   | 0*112     |   arr2      |   arr1 = 0*002                       |
   
   Heap Memory
   
   | Address | Object                |
   |---------|-----------------------|
   |  0*001  | {name : "Praveen"}    |
   |  0*002  |  [1,2,3]              |

   */



let obj1 = {
    name : "Praveen"
}

let arr1 = [1,2,3]

let arr2 = arr1

arr1[0]= "one" 
arr2[2] = 100

let obj2 = obj1
obj2.role = "Developer"

obj1.name = "ROnaldo"

console.log( obj1, obj2  );
console.log( arr1, arr2 );
