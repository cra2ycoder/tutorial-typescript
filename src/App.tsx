import "./styles.css";

const topics = [
  "Data Types",
  "Declarations",
  "Interfaces",
  "Type Aliases",
  "Classes",
  "Inheritance",
  "Generics",
  "Modules",
  "Type Extraction"
];

export default function App() {
  return (
    <div className="App">
      <h1>Hello, Typescript!</h1>
      <a href="https://www.typescriptlang.org/">
        https://www.typescriptlang.org/
      </a>
      <ul>
        {topics.map((topic: string, index: number) => (
          <li key={`topic-${index}`}>{topic}</li>
        ))}
      </ul>
    </div>
  );
}
