const expect = result => ({
  toBe: expected => {
    if (result !== expected) {
      throw new Error(`${result} is not equal to ${expected}`)
    }
  },
  toEqual: expected => {},
  toBeGreaterThan: expected => {}
})

const test = async (title, callback) => {
  try {
    await callback();
    console.log(`✓ ${title}`)
  } catch (error) {
    console.error(`× ${title}`)
    console.error(error)
  }
}

export {
  test,
  expect
}