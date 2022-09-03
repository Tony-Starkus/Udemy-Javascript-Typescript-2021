/**
 * O tipo never se assemelha ao void, indicando que não tem retorno
 * A diferença é que o tipo never indica que a aplicação pode parar quebrar.
 *
 * No exemplo abaixo, a função criaErro() vai quebrar a aplicação pois dispara um Error.
 */

export function criaErro(): never {
  throw new Error('Erro qualquer');
}

criaErro();
