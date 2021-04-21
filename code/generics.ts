/**
 * @description
 * Generics
 */

// basics
function simpleGeneric<T>(arg: T): T {
  return arg;
}

const stringData = simpleGeneric<string>("string");

const numberData = simpleGeneric<number>(1);

const booleanData = simpleGeneric<boolean>(true);

const stringArrData = simpleGeneric<string[]>([]);

// for interfaces
interface Story<T> {
  name: string;
  description: string;
  info: T;
}

interface IStoryInfo {
  author: string;
  publishedOn: string;
  publisher: string;
}

const myStory: Story<string> = {
  name: "Harry Potter",
  description: "Fantasy",
  info: "Nice movie!"
};

const myNewStory: Story<IStoryInfo> = {
  name: "The Jungle Book",
  description: "Animation",
  info: {
    author: "",
    publishedOn: "00/00/0000",
    publisher: ""
  }
};
