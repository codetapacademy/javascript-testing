/* global console */
const expect = result => ({
  toBe: expected => {
    if (result !== expected) {
      throw new Error(`${result} is not equal to ${expected}`)
    }
  }
  // toEqual: expected => {},
  // toBeGreaterThan: expected => {}
})

const test = async (title, callback) => {
  try {
    await callback()
    console.log(`✓ ${title}`) // eslint-disable-line no-console
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`× ${title}`)
    console.error(error) // eslint-disable-line no-console
  }
}

export { test, expect }
