const texto = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!';
const texto1 = 'There is a big fog in NYC';

// ? -> zero ou um(opcional)
/*
O metacaractere ? nas expressões regulares tem duas principais funcionalidades dependendo de onde e como é usado:
1. Tornar o caractere anterior opcional
Quando é colocado após um caractere ou grupo, indica que ele pode aparecer zero ou uma vez.
*/
const regex = /fogo?/gi;

console.log(texto.match(regex));
console.log(texto1.match(regex));

/*
2. Quantificador preguiçoso (lazy)

Quando usado após um quantificador (*, +, {n,}), o ? modifica a busca para ser preguiçosa, ou seja, para encontrar a menor correspondência possível (lazy match), em vez da maior correspondência (greedy match).

Exemplo:

Texto: <a href="link1">Texto1</a><a href="link2">Texto2</a>

regex: /<a.*?>/  

Esse padrão busca a menor correspondência de uma tag HTML de abertura.

SEM ?, retornaria: <a href="link1">Texto1</a><a href="link2">
COM ?, retornaria: <a href="link1">
*/
