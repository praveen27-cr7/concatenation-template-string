/* let row =5
let col =5 */

/* for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= i; j++) {
        document.write("*");        
    }
    document.write("<br>")
}
 */
/* for (let i = row; i >= 1; i--) {
    for (let j = i; j >= i; j--) {
        document.write("*");        
    }
    document.write("<br>")
} */

/*  for (let i = 1; i <= 10; i++) {
    if (i%2 == 0){
    console.log("1");
    }
    else{
        console.log("0");
        
    } 
// console.log(i%2)
        
} */

/* let out = ""
for (let i = 0; i <=10 ; i++) {
    out = out + (i%2)    
}

console.log(out); */

/* let star = ''
for (let i = 0; i <= 10 ; i++) {
     star = star + '* '   
}
console.log(star); */
let starout = ''
for (let i = 1; i <= 10; i++) {
     for (let j = 1; j <= i; j++) {
        if (i%2==0){
            starout = starout + "1 "
        }
        else{
          starout = starout + "0 "
        }

       // starout = starout + i%2+ ' '
     } 
     starout = starout + "\n"  
}
console.log(starout);

let inout = ""
for (let i = 1; i <=10; i++) {
    let temp = (i*2)-1
   for (let j = 0; j <temp; j++) {
      inout = inout + "* "
   }   
   inout = inout + "\n" 
}

console.log(inout);
