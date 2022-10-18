const myName = 'Ludwing';
const myAge = 33;

const suma = (a: number, b: number) => {
  return a + b;
};
suma(30, 3);

class Persona {
  constructor(private age: number, private name: string) {}

  getSumary() {
    return `My name es ${this.name}, my age id ${this.age}`;
  }
}

const Ludwing = new Persona(33, 'Ludwing');
console.log(Ludwing);
