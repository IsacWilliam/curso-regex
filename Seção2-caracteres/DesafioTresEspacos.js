const texto = 'a   b'
const texto1  = 'a                  b'
console.log(texto.match(/a\s\s\sb/))
console.log(texto.match(/a   b/))
console.log(texto.match(/a {3}b/))  // Usando quantificador
console.log(texto1.match(/a   b/))  // retorna null

console.log(texto.match(/a\s+b/)) // Encontra qualquer quantidade de espaçoes em branco
console.log(texto1.match(/a\s+b/))
