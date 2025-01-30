let out = ''

for (let i = 5; i >= 0; i--) {
    let temp = (i*2)-1
  for (let j = 0; j <i; j++) {
      out = out + "  "
    
  }
  for (let k = temp; k < 10; k++) {
    out = out + "* "
    
  }
  out = out + "\n"
    
}

document.write(out)
console.log(out);

console.log("\n \n \n");









