// O par de colchetes define um conjunto em uma expressão regular

const texto = '1,2,3,4,5,6,a.b c!d?e[f';
const regexPares = /[02468]/g;

console.log(texto.match(regexPares));

const texto1 = 'João não vai passear na moto.';
const regexComESemAcento = /n[aã]/g;
console.log(texto1.match(regexComESemAcento));

