const texto = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!';
const texto1 = 'There is a big fog in NYC';

// + -> um ou mais
// indica que o caractere ou grupo anterior deve aparecer uma ou mais vezes.
const regex = /fogo+/gi;

console.log(texto.match(regex));
console.log(texto1.match(regex));

const texto2 = 'Os números: 0123456789';
console.log(texto2.match(/[0-9]/gi));
console.log(texto2.match(/\d/gi));  // mesmo efeito

console.log(texto2.match(/[0-9]+/gi));
console.log(texto2.match(/\d+/gi));  // mesmo efeito
