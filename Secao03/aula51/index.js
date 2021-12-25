const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
}

// Atribuição via desestruturação
// const { nome = 'não existe', sobrenome, idade } = pessoa;
// const { nome: teste = '', sobrenome, idade} = pessoa
// console.log(teste, sobrenome, idade)

const { endereco: { rua, numero }, endereco } = pessoa;
console.log(rua, numero, endereco)
