import './styles.css'

const topics = [
  'Data Types',
  'Declarations',
  'Interfaces',
  'Type Aliases',
  'Classes',
  'Inheritance',
  'Generics',
  'Modules',
  'Type Extraction',
]

export default function App() {
  return (
    <div className="App">
      <h1>Hello, Typescript!</h1>
      <a href="https://www.typescriptlang.org/">
        https://www.typescriptlang.org/
      </a>
      <h2>What is Typescript?</h2>
      <p>
        TypeScript is a strongly typed, object oriented, compiled language.It
        was designed by Anders Hejlsberg (designer of C#) at Microsoft.
        TypeScript is both a language and a set of tools. TypeScript is a typed
        superset of JavaScript compiled to JavaScript. In other words,
        TypeScript is JavaScript plus some additional features.
      </p>
      <hr />
      <ul>
        {topics.map((topic: string, index: number) => (
          <li key={`topic-${index}`}>{topic}</li>
        ))}
      </ul>
    </div>
  )
}
