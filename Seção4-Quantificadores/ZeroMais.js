const texto = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!';
const texto1 = 'There is a big fog in NYC';

// * -> zero ou mais
const regex = /fogo*/gi;

console.log(texto.match(regex));
console.log(texto1.match(regex));

