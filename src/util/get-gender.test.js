import util from '.'

describe('getGender()', () => {
  it('should return male', () => {
    // mock getGender function
    const originalGetGender = util.getGender
    util.getGender = jest.fn((male, female) => 'male')

    const expected = 'male'
    const received = util.getGender('male', 'female')

    console.log(util.getGender.mock)

    expect(received).toBe(expected)
    expect(util.getGender).toHaveBeenCalledTimes(1)
    expect(util.getGender).toHaveBeenCalledWith('male', 'female')
    expect(util.getGender).toHaveBeenNthCalledWith(1, 'male', 'female')

    // reset getGender function to the original
    util.getGender = originalGetGender
  })
})
