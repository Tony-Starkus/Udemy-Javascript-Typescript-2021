@decorator
export class Animal {
  constructor(public nome: string, public cor: string) {}
}

function decorator<T extends new (...args: any[]) => any>(target: T): T {
  return class extends target {
    cor: string;
    nome: string;
    constructor(...args: any[]) {
      super(...args);
      this.nome = args[0];
      this.cor = args[1];
    }

    inverte(valor: string): string {
      return valor.split('').reverse().join('');
    }
  };
}

const AnimalDecorated = decorator(Animal);
const animal = new AnimalDecorated('Luiz', 'roxo');
console.log(animal);
