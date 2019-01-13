import { sumNumbers, substractNumbers } from './sum-numbers'
// Clear console
// process.stdout.write("\033c");
process.stdout.write("\x1Bc");

const expect = result => ({
  toBe: expected => {
    if (result !== expected) {
      throw new Error(`${result} is not equal to ${expected}`)
    }
  },
  toEqual: expected => {},
  toBeGreaterThan: expected => {}
})

const test = (title, callback) => {
  try {
    callback();
    console.log(`✓ ${title}`)
  } catch (error) {
    console.error(`× ${title}`)
    console.error(error)
  }
}

test('test sumNumbers function', () => {
  // create a simple test for sumNumbers function
  const sumResultList = [
    sumNumbers(),
    sumNumbers(3),
    sumNumbers(2, 5),
    sumNumbers(2, 5, 9, 8, 1, 3, 7, 3, 10),
    sumNumbers(2, 5, 9, 8, 1, 3),
    sumNumbers(2, 5, 9),
    sumNumbers(8, 5)
  ]
  const sumExpected = [
    0,
    3, 
    7,
    48,
    28,
    16,
    13
  ]
  
  sumResultList.map((sumResult, key) => {
    expect(sumResult).toBe(sumExpected[key])
  })
})
test('test testSubstractNumbers function', () => {
  // create a simple test for substractNumbers function
  const substrctResult = substractNumbers(8, 3)
  const substractExpected = 5
  
  expect(substrctResult).toBe(substractExpected);
})

