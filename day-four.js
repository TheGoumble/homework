// 1. Write a function named assignGrade that takes one argument, a number score.
// Returns a grade for the score, either “A,” “B,” “C,” “D,” or “F.”
// Call that function for a few different scores and log the result to ensure it works.
function assignGrade(x) {
  if (x >= 90) {
    return "A"
  } else if (x <= 89 && x > 80) {
    return "B"
  } else if (x <= 79 && x > 70) {
    return "C"
  } else if (x <= 69 && x > 60) {
    return "D"
  } else {
    return "F"
  }
}
console.log(assignGrade(69))
console.log(assignGrade(89))
console.log(assignGrade(79))
console.log(assignGrade(50))

// 2. Create a function that returns the number of true values in an array.
const testArray = [
  true,
  false,
  false,
  true,
  false,
  false,
  false,
  true,
  true,
  true,
  false,
]

function truthy(array) {
  let numOfTru = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] === true) {
      numOfTru++
    }
  }
  console.log(numOfTru)
}
truthy(testArray)

// 3. Create a function that converts a string to all uppercase letters
// and console.log the result (hint: string methods):
let str = 'WHAT a TIME to BE ALIVE!'

function stringUp(str){
    return str.toUpperCase()
}

console.log(stringUp(str))

// 4. Create a function that takes in a number of two-pointers and
// three-pointers made and returns a basketball team’s total score?

function scores(x,y){
   return x * 2 + y * 3
}

console.log(scores(2,2))

// Extra for experts:
// 5. Create a function that takes an array of numbers & returns both min and max in that order. (use a loop)
