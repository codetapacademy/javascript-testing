const sumNumbers = (a, b) => a + b


// create a simple test for sumNumbers function
const sumResult = sumNumbers(2, 5)
const sumExpected = 7

if (sumResult !== sumExpected) {
  throw new Error(`${sumResult} is not equal to ${sumExpected}`)
}