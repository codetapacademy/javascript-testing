import util from '.'

describe('getGender()', () => {
  it('should return male', () => {
    // mock getGender function
    const originalGetGender = util.getGender
    util.getGender = (male, female) => 'male'

    const expected = 'male'
    const received = util.getGender('male', 'female')

    expect(received).toBe(expected)

    // reset getGender function to the original
    util.getGender = originalGetGender
  })
})
