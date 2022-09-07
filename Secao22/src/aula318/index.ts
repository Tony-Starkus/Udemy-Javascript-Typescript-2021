type MeuTipo = number;

const arrayNumber: Array<number> = [1, 2, 3, 4, 5, 6];
console.log(arrayNumber);

async function promisseAsync() {
  return 1;
}

function minhaPromise(): Promise<MeuTipo> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

promisseAsync().then((resultado) => console.log(resultado + 1));
