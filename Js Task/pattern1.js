let input = ''
for (let i = 6; i >  0; i--) {
    
  for (let j = i; j < 6; j++) {
      input = input + "  "    
  } 
  let temp = (i*2)-1
  for (let k = 0; k < temp; k++) {
      input = input + "* "   
    }
  input = input + "\n"
}

document.write(input)

console.log(input);  