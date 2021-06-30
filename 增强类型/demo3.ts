declare class Person {
  public name: string;
  private age: number;
  constructor(name:string);
  getAge(): number
}

const person = new Person('Mike')

person.name

person.age 

person.getAge()