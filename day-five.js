// Today's Lab :D WRITE FUNCTIONS FOR EACH!

// Write a function to convert temperatures from Fahrenheit to Celsius.
function f_To_c(x) {
  return (x - 32) * (5 / 9)
}

console.log(f_To_c(53))

// Write a function that converts USD to any other currency of choice.
function convert(dollars, curr) {
  switch (curr) {
    case "euro":
      return dollars * 1.0101010101
      break
    case "pound":
      return dollars * 1.1904761905
      break
    case "yen":
      return dollars * 0.007218652999
      break
    case "ruble":
      return dollars * 0.01754385965
      break
    default:
      return "not listed currency"
      break
  }
}

console.log(convert(100, "euro"))

// The FizzBuzz problem is a classic test given in coding interviews.
// The task is simple: Print integers 1 to N,
// but print "Fizz" if an integer is divisible by 3, "Buzz" if an integer is divisible by 5,
// and "FizzBuzz" if an integer is divisible by both 3 and 5.

function num(x) {
  for (let i = 1; i < x + 1; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log("FizzBuzz")
    } else if (i % 3 === 0) {
      console.log("Fizz")
    } else if (i % 5 === 0) {
      console.log("Buzz")
    } else {
      console.log(i)
    }
  }
}

num(20)

// You are given 2 arrays, one called shoppingList and one called cart.x
// Create a new version of shoppingList where the items in the cart have been removed.

let shoppingList = []
let cart = ["milk", "coffee", "food"]
function newShop(x, y) {
    x = y
    y = []
    return x
}
console.log(cart)
console.log(newShop(shoppingList, cart))

// given a sentence reverse order: "the sky is blue" -> "euld si yks eht"

function reverse(x) {
  let a = x.split("")
  let revStr = a.reverse()
  let res = revStr.join("")
  return res
}

console.log(reverse("The big bruh"))
