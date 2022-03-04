import { type } from 'os'
import './style.css'

// ------------------------------Creating Variables------------------------------

const numberOfCupsOfCoffee = 3
const fullName = 'Chad Lada'

console.log(`Name: ${fullName}`)
console.log(`Cups of coffee/day: ${numberOfCupsOfCoffee}`)

const myObject = {
  fullName: fullName,
  luckyNumber: 23,
  favoriteMovies: ['Idiocracy', 'The Shining', 'Pokemon'],
}
console.table(myObject)

// ------------------------------Getting Input From User------------------------------

const userName = window.prompt('What is your name?')
console.log(userName)

// ------------------------------Converting String Input Into Numbers------------------------------

const numberOne = window.prompt('Enter a number')
const numberTwo = window.prompt('Enter another number')
const numOne = Number(numberOne)
const numTwo = Number(numberTwo)
// console.log(numOne)
// console.log(numTwo)

// ------------------------------Doing Math------------------------------

const sum = numOne + numTwo
// console.log(sum)

const difference = numOne - numTwo
// console.log(difference)

const product = numOne * numTwo
// console.log(product)

const quotient = numOne / numTwo
// console.log(quotient)

const remainder = numOne % numTwo
// console.log(remainder)

const message = `Hello ${fullName}, Here are some calculations with your numbers`
const messagenumbers = `Your numbers are: ${numOne} and ${numTwo}`
const message1 = `Sum: ${sum}`
const message2 = `Difference: ${difference}`
const message3 = `Product: ${product}`
const message4 = `Quotient: ${quotient}`
const message5 = `Remainder: ${remainder}`

console.log(message)
console.log(messagenumbers)
console.log(message1)
console.log(message2)
console.log(message3)
console.log(message4)
console.log(message5)

// ------------------------------Arrays------------------------------

const numbers = [3326, 29750, 15549, 15961, 47139]

const smallest = Math.min(...numbers)
console.log(`Smallest: ${smallest}`)

const largest = Math.max(...numbers)
console.log(`Largest: ${largest}`)

const arraySum = numbers.reduce((a, b) => {
  console.log('current value', a + b)
  return a + b
}, 0)
console.log(`Total Sum: ${arraySum}`)

const average = arraySum / 5
console.log(`Average: ${average}`)

// ------------------------------Arrays/Object------------------------------

let stats = {
  smallest: smallest,
  largest: largest,
  sum: sum,
  average: average,
}
