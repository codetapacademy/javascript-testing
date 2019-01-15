import { formatNumber } from "./format-number"

describe("Format numbers", () => {
  it(`it should format "1234" to "1,234.00"`, () => {
    const result = formatNumber("1234")
    const expected = "1,234.00"
    expect(result).toBe(expected)
  })

  it(`it should format "67834.2" to "67,834.20"`, () => {
    const result = formatNumber("67834.2")
    const expected = "67,834.20"
    expect(result).toBe(expected)
  })
})
