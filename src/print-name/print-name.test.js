import { printName } from "./print-name";

describe('Prints the full name', () => {
  it('should return empty string when nothing is passed', () => {
    const result = printName()
    const expected = ''

    expect(result).toBe(expected)
  })

  it('should return firstName and lastName', () => {
    const nameList = [
      {
        firstName: 'Marian',
        lastName: 'Zburlea'
      },
      {
        firstName: 'Gratiela',
        lastName: 'Zburlea'
      }
    ]
    const expectedList = [
      'Marian Zburlea',
      'Gratiela Zburlea',
    ]

    const resultList = nameList
      .map(({ firstName, lastName }) => printName(firstName, lastName))

    expect(resultList).toBe(expectedList)
  })
})
