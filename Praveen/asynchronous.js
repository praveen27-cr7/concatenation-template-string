function f1(){
    console.log( "First" );
    
}
function f2(){
    console.log( "Second" );
    
}
function f3(){
    console.log( "Three" );
    
}

f1()
setTimeout( f2, 3000 );
f3()

//Event Loop --->
//Micro Task Queue  - First Priority
   //Promise  -->
   //then  - success
   // catch - failure
   
//MAcro Task Queue -- Second Priority
       //settimeout 
       //setinterval 

       
     
