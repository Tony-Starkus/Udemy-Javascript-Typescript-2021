// const alunos = ['Luiz', 'Maria', 'João', 1, true, null];
const alunos = ['Luiz', 'Maria', 'João'];
alunos[0] = 'Eduardo';
alunos[3] = 'Luiza';

alunos.unshift('Luiza'); // Adiciona no começo

console.log(alunos);

delete alunos[1];

console.log(alunos);

console.log(alunos instanceof Array);
