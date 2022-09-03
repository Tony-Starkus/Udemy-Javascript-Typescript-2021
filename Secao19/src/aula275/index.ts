const tuplaDadosCliente1: [number, string] = [1, 'Thalisson'];
const tuplaDadosCliente2: readonly [number, string, string?] = [1, 'Thalisson'];
const tuplaDadosCliente3: [number, string, ...string[]] = [1, 'Thalisson'];
const array: ReadonlyArray<number> = [1, 2, 3];

tuplaDadosCliente1[0] = 100;
tuplaDadosCliente1[1] = 100;
tuplaDadosCliente1[1] = 'Bandeira';

tuplaDadosCliente2.pop();

console.log({ tuplaDadosCliente2, tuplaDadosCliente3 });
