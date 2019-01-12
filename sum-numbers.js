const sumNumbers = (a, b) => a - b


// create a simple test for sumNumbers function
const sumResult = sumNumbers(2, 5)
const expected = 7

if (sumResult !== expected) {
  throw new Error(`${sumResult} is not equal to ${expected}`)
}