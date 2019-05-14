import { printName } from "./print-name";

describe('Prints the full name', () => {
  it('should return empty string', () => {
    const result = printName()
    const expected = ''

    expect(result).toBe(expected)
  })
})
