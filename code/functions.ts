let myFunction: Function

myFunction = () => {
  console.log('test fn')
}

// will throw error
myFunction = 'string'

const add = (a: number, b: number, c?: number | string = 10): number => {
  console.log({ c })
  return a + b
}
