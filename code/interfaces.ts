/**
 * @name Interfaces
 */

// basic
interface IMath {
  a: number;
  b: number;
}

interface IMathFunctions {
  add: (a: number, b: number) => number;
  multiply: (a: number, b: number) => number;
}

// combined
interface IExMath {
  a: number;
  b: number;
  add: (a: number, b: number) => number;
  multiply: (a: number, b: number) => number;
}

// inheritance
interface ICalc extends IMath, IMathFunctions {}

// optional props
interface IOptionalTypes {
  // mandatory props
  name: string;
  age: number;

  // `?` indicates optional
  education?: string;
}

// `readonly` props
interface IProfile {
  readonly name: string;
  readonly age: number;
}

// types
interface IPerson {
  name: string;
  age: string | number;
}

// array of IPerson
type TPersonList = IPerson[];

// intersection type
interface IColor {
  background?: string;
  text?: string;
}

interface IDimensions {
  width: number;
  height: number;
  radius?: number;
}

type TShape = IDimensions & IColor;

function createShape(shape: TShape) {
  /**
   * @todo
   * create shape code here
   */
}

// union types
interface IProduct {
  categoryId?: string | number;
  list?: string[] | number[] | boolean[];
}
