/**
 * @name DataTypes
 * - Basic Types {Primitive}
 * - User-defined Types
 * - Super Types
 */

/**
 * @name BasicTypes
 * @description  number, boolean, string, null, undefined & void
 */

const profileNumber: number = 10
const isSeniorCitizen: boolean = false
const profileName: string = 'michael'

const userDOB = null
const university = undefined

const calculate = (): void => {
  let a: number = 10,
    b: number = 4
  const res = ((a / b) * a) % b
  console.log(res)
}

/**
 * @name UserDefinedTypes
 * @description arrays, classes, interfaces, enum, & tuple
 */

// arrays
const stringArr: string[] = ['a', 'b', 'c']
const numberArr: number[] = [1, 2, 3]
const booleanArr: boolean[] = [true, false, true]

// classes
class Profile {
  name: string
  age: number
}

const user = new Profile()
user.name = 'john'
user.age = 24

// class extensions
class Professor extends Profile {
  constructor() {
    super()
    console.log(this.name, this.age)
  }
}

const collegeProfessor = new Professor()
collegeProfessor.name = 'Anna'
collegeProfessor.age = 40

// interfaces
interface IProfile {
  firstName: string
  lastName: string

  // optional property
  getName?: () => string
}

const student: IProfile = {
  firstName: 'john',
  lastName: 'doe',
  getName: () => {
    return `${student.firstName} ${student.lastName}`
  },
}

/**
 * @name SuperDataType
 * @description any
 */

const data: any = []
let response: any = {}

response = {}
response = ''
response = ['a', 'b', 'c']

/**
 * @name ExplicitType
 */
const name: string
const age: number
const degree: string

/**
 * @name UnionType
 */
const arr: (string | number)[] = []
arr.push(0)
arr.push('name')

let uid: string | number
uid = 0
uid = 'string'
