//Stack - to store primitive values 
// heap - to store non primitive values link array , object , function 

/*  Call By .value

   Stack (Before Modification):

   |  Address |  Varilable  | Value |
   |----------|-------------|-------|
   | 0*100    |   x         |  10   |
   | 0*104    |   y         |  x=10 | 


    Stack (Before Modification):

   |  Address |  Varilable  | Value |
   |----------|-------------|-------|
   | 0*100    |   x         |  20   |
   | 0*104    |   y         |  30   | 

*/

let x  = 10
let y = x ;

x = 20;
y = 30
console.log( x, y );
