/**
 * @description
 * classes
 *
 */

type IPrimitiveType = number | string;

interface IAnimal {
  name: string;
  category: string;
  height: IPrimitiveType;
  weight: IPrimitiveType;

  getName(): string;
  setDetails(width: IPrimitiveType, height: IPrimitiveType): void;
}

class Animal implements IAnimal {
  public name: string;
  public category: string;
  public weight: IPrimitiveType;
  public height: IPrimitiveType;

  // readonly
  readonly age: IPrimitiveType;

  constructor(name?: string) {
    this.name = name;
  }

  private init() {
    console.log("___internal init method__");
  }

  protected getDetails() {
    return {
      weight: this.weight,
      height: this.height
    };
  }

  public getName() {
    return this.name;
  }

  public setDetails(weight: IPrimitiveType, height: IPrimitiveType) {
    this.weight = weight;
    this.height = height;
  }
}

const dog = new Animal("puppy");
dog.getName();
dog.setDetails(100, 200);

/**
 * @description
 * classes with generics
 */
