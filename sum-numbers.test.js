/** global: test */
import { sumNumbers, substractNumbers } from "./sum-numbers";
// import { test, expect } from './global-test'
// Clear console
// process.stdout.write("\033c");
// process.stdout.write("\x1Bc");

test("test sumNumbers function", async () => {
  // create a simple test for sumNumbers function
  const sumResultList = [
    await sumNumbers(),
    await sumNumbers(3),
    await sumNumbers(2, 5),
    await sumNumbers(2, 5, 9, 8, 1, 3, 7, 3, 10),
    await sumNumbers(2, 5, 9, 8, 1, 3),
    await sumNumbers(2, 5, 9),
    await sumNumbers(8, 5)
  ];
  const sumExpected = [0, 3, 7, 48, 28, 16, 13];

  sumResultList.map((sumResult, key) => {
    expect(sumResult).toBe(sumExpected[key]);
  });
});

test("test testSubstractNumbers function", async () => {
  // create a simple test for substractNumbers function
  const substrctResult = await substractNumbers(8, 3);
  const substractExpected = 5;

  expect(substrctResult).toBe(substractExpected);
});
