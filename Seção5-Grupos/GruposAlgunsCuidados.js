const texto = 'Pedrinho (filho do Pedro Silva) é doutor do ABCabc!';

// Não existem GRUPOS dentro de CONJUNTOS -> Aqui tudo é interpretado como LITERAL dentro do CONJUNTO
console.log(texto.match(/[(abc)]/gi));

// CONJUNTOS dentro de GRUPOS são possíveis
console.log(texto.match(/([abc])/gi));

// Evitar uso DESNECESSÁRIO de GRUPO
console.log(texto.match(/(abc)/gi));
