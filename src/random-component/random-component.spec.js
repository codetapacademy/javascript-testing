import { createCourse } from "./random-component.action";
import { CREATE_COURSE } from "./random-component.constant";

describe('@random-component', () => {
  it('should have an empty title', () => {
    const result = createCourse()

    const expected = {
      type: CREATE_COURSE,
      title: ''
    }

    expect(result).toEqual(expected)
  })

  it('should have the correct title', () => {
    const title = 'JavaScript 101'
    const result = createCourse(title)

    const expected = {
      type: CREATE_COURSE,
      title
    }

    expect(result).toEqual(expected)
  })
})