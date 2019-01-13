const sumNumbers = (...numberList) => numberList.length ? numberList.reduce((a, c) => a + c) : 0

const substractNumbers = (a, b) => a - b

export default {
  sumNumbers,
  substractNumbers
}