//Intervalos funcionam dentro de Conjuntos
const texto = '1,2,3,4,5,6,a.b c!d?e[f,G& H,I';

console.log(texto.match(/[a-z]/g));
console.log(texto.match(/[a-z]/gi));
console.log(texto.match(/[b-d]/g));
console.log(texto.match(/[2-4]/g));
console.log(texto.match(/[A-Z1-3]/g));
console.log(texto.match(/[A-Z1-3]/gi));
