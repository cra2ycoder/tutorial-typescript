/**
 * @description
 * Generics
 */

// basics
function simpleGeneric<T>(arg: T): T {
  return arg
}

const stringData = simpleGeneric<string>('string')

const numberData = simpleGeneric<number>(1)

const booleanData = simpleGeneric<boolean>(true)

const stringArrData = simpleGeneric<string[]>([])

/**
 * @description
 * INTERFACES
 */
interface Story<T> {
  name: string
  description: string
  info: T
}

interface IStoryInfo {
  author: string
  publishedOn: string
  publisher: string
}

const myStory: Story<string> = {
  name: 'Harry Potter',
  description: 'Fantasy',
  info: 'Nice movie!',
}

const myNewStory: Story<IStoryInfo> = {
  name: 'The Jungle Book',
  description: 'Animation',
  info: {
    author: '',
    publishedOn: '00/00/0000',
    publisher: '',
  },
}

/**
 * @description
 * CLASSES
 */
interface IBook {
  name: string
  description: string
  publishedOn?: string
  publisher?: string
}

class Book<T> {
  private info: T
  constructor(data: T) {
    this.info = data
  }

  public getBookInfo(): T {
    return this.info
  }
}

const myBook = new Book<IBook>({
  name: 'book',
  description: 'book description',
})

const bookInfo = myBook.getBookInfo()
console.log(bookInfo.name)

const addUID = <T>(data: T) => {
  const newUID = Math.random() * 100
  return { ...data, newUID }
}

addUID({
  name: 's',
  age: 1,
})

addUID('key')
addUID(false)

// only object is possible
const addUIDType1 = <T extends object>(data: T) => {
  const newUID = Math.random() * 100
  return { ...data, newUID }
}

addUIDType1({ name: 's' })

// name prop is mandatory and it should be object
const addUIDType2 = <T extends { name: string }>(data: T) => {
  const newUID = Math.random() * 100
  return { ...data, newUID }
}

addUIDType2({ name: 's' })

// throws error
addUIDType2({ age: 2 })
