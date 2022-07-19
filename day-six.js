// What are the seven paradigms of the database?
// Key-value, Wide column, documnet, relational, graph, search, multi-model
// Create a function that takes a base number and an exponent number and returns the calculation.
function power(num, exponent) {
  let x = 1
  for (let i = 0; i <= exponent; i++) {
    x *= num
  }
  console.log(x)
}
power(2, 2)
// Create a function that takes an array and a string as arguments and returns the index of the string.
function theDex(array, string) {
    return array.indexOf(string)
}


// Create a function that takes an array and returns the types of values (data types) in a new array.
function dType(array) {
  let dataT = []
  for (let i = 0; i < array.length; i++) {
    dataT.push(typeof array[i])
  }
  console.log(...dataT)
}

//test array
let theArray = [3, '5', true, 'word', 69, false]
dType(theArray)