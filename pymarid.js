let out = ''

for (let i = 10; i >= 0; i--) {
    let temp = (i*2)-1
  for (let j = 0; j <i; j++) {
      out = out + "  "
    
  }
  for (let k = temp; k < 18; k++) {
    out = out + "* "
    
  }
  out = out + "\n"
    
}

console.log(out);

let input = ''
for (let i = 10; i >  0; i--) {
    
  for (let j = i; j < 10; j++) {
      input = input + "  "    
  } 
  let temp = (i*2)-1
  for (let k = 0; k < temp; k++) {
      input = input + "* "   
    }
  input = input + "\n"
}

console.log(input);  

