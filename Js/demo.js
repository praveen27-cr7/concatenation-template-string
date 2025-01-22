 /* concatenation */
 let str = "Javascript"
 let str1 = "is a scripting language"
 let output = str + " " + str1

 console.log(output);
 
/* Template String */
let num = 5
let num2 = 1
let result = 5*1
console.log(`${num}*${num2}=${result}`);

/* Typeconversion */
//Implicit conversion
let one = "45"
let two= "1000"
let plus = one + two
console.log(plus);


//string
console.log('hi' + true);
console.log('hi' + undefined);
console.log('hi' + null);
console.log('hi' + [1,2] );
console.log('hi' + {});


//string + anything === anythiing + string

//Number
  
console.log(10 + true);//11
// //true = 1 , false = 0
console.log(10 + false);//10
console.log(10 + undefined);// NaN not a number
console.log(10 + null);//0
console.log(10 + [1]);//string
console.log(typeof(10 + [1]));//string
console.log(10 + {});
console.log(typeof(10+ " "));


//Boolean
console.log(10 + true);//11
console.log(true + undefined);//NaN
console.log(true+null);//1+0 ==1

console.log(10 == '10');
console.log(10 - "2");//8
console.log(10 - 'abc');//NaN
console.log(10 - " ");//10 - 0 == 10

// Explicit Conversion

console.log(10 +Number('10'));//20
console.log(Number(' '));//0
console.log(Number("abd"));//NaN
console.log(Number(false));//0
console.log(Number(undefined));//NaN
console.log(Number([1,2]));//NaN
console.log(Number({}));//NaN

//Boolean
console.log(Boolean(""));//false
console.log(Boolean("123"));//true
console.log(Boolean(-10));//true
console.log(Boolean(undefined));//false
console.log(Boolean(null));//false
console.log(Boolean([]));//true
console.log(Boolean({}));//true

console.log(Boolean( Infinity ));//true
console.log(Boolean( -Infinity ));//true
console.log(Boolean( NaN ));//false

console.log(String());


//Control Statement

// If statement

let age = 16;
 
if(age >= 18){
    console.log("Eligible")
}

// if else Statement
 
if(age >= 18){
    console.log("Eligible")
}
else{
    console.log("not Eligible");
    
}

let pwd_input = false

if(pwd_input){
    console.log("welcome to website");  
}
else{
    console.log("password is incorrect");
    
}

//if elseif else statement

/* 
Syntax

if (){
}
else if (){
   statement
   }
else if (){
   statement
   }
else if (){
   statement
   }
else if (){
   statement
   }
else{}
*/

let hour = 23

//else if ladder

if(hour>=1 && hour<=6){
    console.log('early morning');
}
else if (hour>=7 && hour<=12){
    console.log("morning");
    
}
else if (hour>=13 && hour<=16){
    console.log("afternoon");
    
}
else if (hour>=17 && hour<=20){
    console.log("evening");
    
}
else if( hour>=21 && hour<=24){
    console.log("night");
    
}
else{
    console.log(" it is not valid");
    
}

let mark = 40;
let A = "Grade"

if (mark >= 35 && mark <= 50){
    console.log(`${A} C`);
    
}

else if (mark >=51 && mark <=70){
    console.log(`${A} B`);
    
}

else if (mark >=  71 && mark <= 90){
    console.log(`${A} A`);
    
}
else if (mark <= 34) {
    console.log(`${A} D`);
    
}
else if (mark > 100){
    console.log("not conceded");
    
}
