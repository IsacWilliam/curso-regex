const texto = 'Casa bonita é casa amarela da esquina com a Rua ACASALAR.';
const regex = /casa/gi;
console.log(texto.match(regex));
console.log(texto.match(/a b/));
console.log(texto.match(/a c/));
console.log(texto.match(/a a/));