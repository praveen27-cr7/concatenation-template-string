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

//Scope of Variables
function outerfunction(){
    if (true){
    var functionVar = "Im a variable"
} 
console.log(functionVar)
}
outerfunction()

function blockscoped(){
    let blockvariable = "Im a block scope"
    if(true){
        const vr1 =  "I am a const variable"
        console.log(blockvariable);
        console.log(vr1);
    }
    
}
blockscoped()


/* var globalscoped = "Im a accesible everywhere"
let blockscoped0 = "hi hello"
const blockscoped1 = "hello"

console.log(window.globalscoped);
console.log(window.blockscoped0);
console.log(window.blockscoped1);
 */

var a = 10;
let b = 20;
const c = 30;
function accessglobal(){
    var a = 100;
    let b = 200;
    const c = 300;

     function nested(){
          var a = 101;
          let b = 202;
          const c = 303;
          console.log(a+b+c)  
  }
  nested()
console.log(a +b+ c)

}
accessglobal()
console.log(a+b+c)

//Named Function

function add(uName){
    console.log("named function")
}
add('xjoker')

//Ananomous function

let Say =function (a, b){
    console.log("Hello" + a*b)
}
Say(10 , 9);

//Arrow Function

let arrow = () =>  {
    console.log("Arrow function");
}
arrow()

let firstName ="Praveen"
 let returned = fname => {
    return fname
 }
let input = returned(firstName)
console.log(input);

//Higher order function
function fun1(){
    console.log("I am higher order function")
}

function fun2(){
    console.log("I am a call back function");
    
}

fun1(fun2())

function mul( callback , a, b){
     console.log(a + b);
     callback(7 ,9)
     
}
function sub(num1, num2){
    console.log(num1 + num2 );
    
}
add(sub , 10 , 20 )

//hositing

var d = 10

console.log(d)


function sample(){
    console.log("hi NANA")
}



//CURRYING

function div(a){
    return function(b){
           return function(c){
             console.log(a+b+c);
           }
    }
}

div(10)(5)(6);
 

let curry1 = div(100)
let curry2 = curry1(200)
curry2(400)

console.log(curry1);
console.log(curry2);

//self invoke

(function (){
    console.log("self invoke function");
    
})()
//closure
function dummy(){
    let outervar = "Bye bye"
    function innerdummy(){
        console.log(outervar);
        
    }
    return innerdummy
}
let joke = dummy();
joke()

//Generator Function

function* genfun(){
  yield "Boy"
  yield "joke"
  yield "kol"
}

let gen = genfun()
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next());
console.log(gen.next());

//Arrays

var sport = ["cricket" , "football" , "tennis" , "hockey"]

console.log(sport[0]);
console.log(sport.length-1);
console.log(sport[sport.length-1]);


let Per = ["Praveen", 20 , true , {id : 1}] 

//array constructor

let newArr = new Array();

newArr[0] = "praveen"
newArr[1] =  2
newArr[2] =  true
newArr[3] =  null

console.log(newArr);





