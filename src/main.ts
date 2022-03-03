import './style.css'

// ------------------------------Creating Variables------------------------------

const numberOfCupsOfCoffee = 3
const fullName = 'Chad Lada'

console.log(`${fullName} ${numberOfCupsOfCoffee}`)

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
console.log(numOne)
console.log(numberTwo)

// ------------------------------Doing Math------------------------------

const sum = numOne + numTwo
console.log(sum)
