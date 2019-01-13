// @flow
const add = (a: number, b: number): number => a + b

type User = {
  name: {
    first: string,
    middle: string,
    last: string
  }
}

const getFullName = (user: User): string => {
  const {
    name: { first, middle, last }
  } = user
  return [first, middle, last].filter(Boolean).join("W")
}

add(1, 2)
getFullName({ name: { first: "Marian", middle: "I.", last: "Zburlea" } })
