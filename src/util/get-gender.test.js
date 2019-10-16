import util from '.'

describe('getGender()', () => {
  it('should return male', () => {
    jest.spyOn(util, 'getGender')

    // mock getGender function
    const originalGetGender = util.getGender
    util.getGender = util.getGender.mockImplementation((male, female) => 'male')

    const expected = 'male'
    const received = util.getGender('male', 'female')

    expect(received).toBe(expected)
    expect(util.getGender.mock.calls).toStrictEqual([ [ 'male', 'female' ] ])
    expect(util.getGender).toHaveBeenCalledTimes(1)
    expect(util.getGender).toHaveBeenCalledWith('male', 'female')
    expect(util.getGender).toHaveBeenNthCalledWith(1, 'male', 'female')

    // reset getGender function to the original
    util.getGender.mockRestore()
  })
})
