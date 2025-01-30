let output = ''
for (let i = 0; i <= 6; i++) {
    
     for (let j = 0; j < i; j++) {
        output = output + "* "
        
     }  
     output = output + "\n"  
}

for (let i = 5; i >= 0; i--) {
  for (let j = 0; j < i; j++) {
     output= output + "* "
    
  }
    output = output + "\n"

   }    


document.write(output)   

console.log(output);