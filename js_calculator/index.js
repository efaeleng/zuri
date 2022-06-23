// Basic JS Calculator

let result = 0

const addition =(a, b)=>{
  result = a + b
  return `The result is: ${result}`
}
const subtraction=(a, b)=>{
  result = a - b
  return `The result is: ${result}`
}
const multiplication=(a, b)=>{
  result = a * b
  return `The result is: ${result}`
}

const division=(a, b)=>{
  result = a / b
  return `The result is: ${result}`
}

while (true) {
  const question = Number(prompt('Welcome to my calculator!!!.\n Press 1 for addition.  \n Press 2 for subtraction. \n Press 3 for multiplication. \n Press 4 for division. '))

  if (question === 1) {
      let a = Number(prompt('First number'))
      let b = Number(prompt('Second number'))
      alert(addition(a, b))
      break
  }

  else if (question === 2) {
      let a = Number(prompt('First number'))
      let b = Number(prompt('Second number'))
      alert(subtraction(a, b))
      break
  }

  else if (question === 3) {
      let a = Number(prompt('First number'))
      let b = Number(prompt('Second number'))
      alert(multiplication(a, b))
      break
  }

  else if (question === 4) {
      let a = Number(prompt('First number'))
      let b = Number(prompt('Second number'))
      alert(division(a, b))
      break
  }

  else {
      alert('Wrong input.Please try again!!!')
  }    
}