const cpf = '705.484.450-52';
const cpfNumbers = cpf.replace(/\D/g, '');
let sum = 0;

for (let i = 0; i < cpfNumbers.length - 2; i++) {
  if (!isNaN(parseInt(cpfNumbers[i]))) {
    sum = parseInt(cpfNumbers[i]) * (10 - i) + sum;
  }
}

if (11 - (sum % 11) === 0 && parseInt(cpfNumbers[9]) === 0) {
  console.log('Cpf inválido');
  return false;
} else if (11 - (sum % 11) !== parseInt(cpfNumbers[9])) {
  console.log('Cpf inválido');
  return false;
}

sum = 0;

for (let i = 0; i < cpfNumbers.length - 1; i++) {
  if (!isNaN(parseInt(cpfNumbers[i]))) {
    sum = parseInt(cpfNumbers[i]) * (11 - i) + sum;
  }
}

if (11 - (sum % 11) === 0 && parseInt(cpfNumbers[10]) === 0) {
  console.log('Cpf inválido');
  return false;
} else if (11 - (sum % 11) !== parseInt(cpfNumbers[10])) {
  console.log('Cpf inválido');
  return false;
}

console.log('Cpf válido');
