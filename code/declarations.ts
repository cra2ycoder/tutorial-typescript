/**
 * @name Decalartions
 */

// variables
const profileNumber: number = 10;
const isSeniorCitizen: boolean = false;
const profileName: string = "michael";

const userDOB = null;
const university = undefined;

const stringArr: string[] = ["a", "b", "c"];
const numberArr: number[] = [1, 2, 3];
const booleanArr: boolean[] = [true, false, true];

// functions
function addNumbers(a: number, b: number): number {
  return a + b;
}

const multiplyNumbers = (a: number, b: number): number => {
  return a * b;
};

// function + interface
interface IUser {
  name: string;
  age: number;
}

function getProfile({ name, age }: IUser) {
  console.log({ name, age });
}

getProfile({ name: "anna", age: 40 });
