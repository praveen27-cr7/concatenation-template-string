//Math.abs(x)

console.log( Math.abs( 50 ) );
console.log( Math.abs(-50) );// negative convert to positive

//Math.sign(x)

console.log( Math.sign(-19) );
console.log( Math.sign(0) );
console.log( Math.sign(9) );

//Math.sqrt(x)

console.log( Math.sqrt(36) );//identify the square value 

//Math.cbrt 

console.log( Math.cbrt( 125 ) );// identify the cube value 

//Math.pow(base, exponent)

console.log( Math.pow(2, 6) );//identify the power value

//Math.min(....values)

let arr = [2,30, 5, 15, 1, 9,]

console.log( Math.min(...arr) );

//Math.max(...values)

console.log( Math.max(...arr, 100, 3, 50) );

//Math.random(x)

console.log( Math.random() );
console.log( Math.random()*100 );

let randomNum = Math.random()
console.log( randomNum.toFixed(4) ); //fix the decimal number

//Math.ceil(x)

console.log( Math.ceil(2.6) );
console.log( Math.ceil(2.1) );

//Math.floor(x)

console.log( Math.floor(2.99) );

//Math.round(x)

console.log( Math.round( 2.49 ) );
console.log( Math.round( 2.5 ) );

//Math.trunc(x)// remove the decimal

console.log( Math.trunc(5.9992) );






