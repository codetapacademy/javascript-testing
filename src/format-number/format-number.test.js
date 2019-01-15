import { formatNumber } from "./format-number"

describe("Format numbers", () => {
  it("it should format a string to a number with two decimals", () => {
    const result = formatNumber("1234")
    const expected = "1,234.00"
    expect(result).toBe(expected)
  })
})
