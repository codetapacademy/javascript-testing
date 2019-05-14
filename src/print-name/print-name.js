export const printName = (...argList) => {
  if (argList.length) {
    return `${argList[0]} ${argList[1]}`.trim()
  }
  return ''
}
