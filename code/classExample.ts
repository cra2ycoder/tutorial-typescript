class Student {
  name: string
  age: number
  section: string
  //   forma: () => string

  constructor(name: string, age: number, section: string) {
    this.name = name
    this.age = age
    this.section = section
  }

  format() {
    return `${this.name} ${this.age} ${this.section}`
  }
}

const s1 = new Student('joe', 12, 'A')
const s2 = new Student('michael', 13, 'B')

const studentArr: Student[] = [s1, s2]

console.log({ s1, s2, studentArr })
