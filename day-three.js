//Home Work

// 1. Write a function that adds two numbers together.
//let sum = (x,y) => {return x + y};
function sum(x, y) {
  return x + y
}

// 2. Write a car object that has a modal and color.  Create a property called year then console.log all of the objects properties individually.
let car = {
  modal: "Toyota",
  color: "White",
}

car.year = "2015"
console.log(car.modal, car.color, car.year)

// 3. Write a function to get the first element in an array.
function first(array, array2) {
  for (let i = 0; i <= array.length; i++) {
    for (let j = i; j != 0; j--){
    theLast = array[j]
    array.pop()
    console.log(...array)
    array2.push(theLast)
    }
  }
}
let b = []
let a = [1, 2, 3, 3, 3, 5, 6, 1, 8, 8]
console.log(a)
console.log(first(a, b))
console.log(...b)
