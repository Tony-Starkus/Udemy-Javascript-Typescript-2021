function inverteNomeECor<T extends new (...args: any[]) => any>(target: T): T {
  console.log('Sou o decorador e recebi', target);
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

@inverteNomeECor
export class Animal {
  constructor(public nome: string, public cor: string) {
    console.log('Sou a classe');
  }
}

const AnimalDecorated = inverteNomeECor(Animal);
const animal = new AnimalDecorated('Luiz', 'roxo');
console.log(animal);
