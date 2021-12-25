// TIPOS DE DADOS PRIMITIVOS

/**
 * 
 * String, number, underfined, null, boolean, symbol
 * 
 */

const nome = 'Thalisson'; // string
const nome1 = "Thalisson"; // string
const nome2 = `Thalisson`; // string

const num1 = 10; // number
const num2 = 10.52; // number

let nomeAluno; // undefined = não aponta para local nenhum na memória
let sobrenomeAluno = null; // Nulo -> não aponta para local nenhum na memória

/**
 * O undefined é definido pela própria linguagem. Se quiser utilizar a ideia do undefined, utilize o null.
 */

const alunoAprovado = true; // Booleano -> true, false

const a = [1, 2];
const b = a;
b.push(3);

console.log(a, b); // saída -> [1, 2, 3] [1, 2, 3]

