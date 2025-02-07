// Unicode hoje:
// Quantidade de bytes é variável/expansível
// Suporta mais de 1 milhão de caracteres
// Possui mais de 100.000 caracteres atribuídos
// http://unicode-table.com/pt/

const texto = 'aʬc௵d'
console.log(texto.match(/\u02AC|\u0BF5/g))
