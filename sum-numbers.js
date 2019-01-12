const sumNumbers = (a, b, c = 0) => a + b + c

const substractNumbers = (a, b) => a - b


// create a simple test for sumNumbers function
const sumResultList = [
  sumNumbers(2, 5),
  sumNumbers(2, 5, 9, 8, 1, 3),
  sumNumbers(2, 5, 9),
  sumNumbers(8, 5)
]
const sumExpected = [
  7,
  16,
  13
]

sumResultList.map((sumResult, key) => {
  if (sumResult !== sumExpected[key]) {
    throw new Error(`${sumResult} is not equal to ${sumExpected[key]}`)
  }
})

// if (sumResult !== sumExpected) {
// }

const substrctResult = substractNumbers(8, 3)
const substractExpected = 5

if (substrctResult !== substractExpected) {
  throw new Error(`${substrctResult} is not equal to ${substractExpected}`)
}