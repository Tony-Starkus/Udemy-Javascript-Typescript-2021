const numero = Number(prompt("Digite um número:"));

document.getElementById("numero-titulo").innerHTML = numero;

const divTexto = document.getElementById("texto");

divTexto.innerHTML = `
    <p>Seu número + 2 é ${numero + 2}</p>
    <p>Raiz quadrada: ${Math.sqrt(numero)}</p>
    <p>${numero} é inteiro: ${Number.isInteger(numero)}</p>
    <p>É NaN: ${isNaN(numero)}</p>
    <p>Arredondando para cima: ${Math.ceil(numero)}</p>
    <p>Arredondando para baixo: ${Math.floor(numero)}</p>
    <p>Com duas casas decimais: ${numero.toFixed(2)}</p>
`;
