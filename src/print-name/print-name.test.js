import { printName } from "./print-name";

describe('Prints the full name', () => {
  it('should return empty string when nothing is passed', () => {
    const result = printName()
    const expected = ''

    expect(result).toBe(expected)
  })

  it('should return firstName and lastName', () => {
    const firstName = 'Marian'
    const lastName = 'Zburlea'
    const expected = 'Marian Zburlea'

    const result = printName(firstName, lastName)

    expect(result).toBe(expected)
  })
})
