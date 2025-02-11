// . é um coringa, válido para uma posição

const texto = '1,2,3,4,5,6,7,8,9,0'

console.log(texto.match(/1.2/g)) // retorna 1,2 pois o ponto é um coringa
console.log(texto.match(/1\.2/g)) // retorna null pois não existe 1.2 no texto
console.log(texto.match(/1..,/g)) // retorna 1,2 pois o ponto é um coringa para cada caractere após o 1 

const notas = '8.3,7.1,8.8,10.0'
console.log(notas.match(/8../g)) // retorna 8.3 e 8.8 pois o ponto é um coringa para cada caractere após o 8
console.log(notas.match(/.\../g)) // retorna 8.3, 7.1 e 8.8 pois o ponto é um coringa para cada caractere antes e após o ponto
