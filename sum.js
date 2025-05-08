// FUnction för SUm
function sum (a, b) {
  // Om a är negativt, multiplicera det med -1
  if (a < 0) {
    a *= -1
  }

  //Om b är negativt, multiplicera det med -1
  if (b < 0) {
    b *= -1
  }
    
  //Addera a och b
  const sum = a + b

  return sum
}

function sub(a, b) {
  return a - b
}

module.exports = { sum, sub }
/*
console.log( sum(1, 2) )
console.log( sum(10, 15) )
console.log( sum(-10, -15) )
*/