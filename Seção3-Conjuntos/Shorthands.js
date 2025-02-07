// Shorthands são atalhos para conjuntos de grupos de caracteres

const texto = `1,2,3,4,5,6a.b c!d?e		-
f_g
`
console.log("Números [0-9]:", texto.match(/\d/g));
console.log("Não Números [^0-9]:",texto.match(/\D/g));

console.log("Caracteres [a-zA-Z0-9_]:", texto.match(/\w/g));
console.log("Não Caracteres [^a-zA-Z0-9_]:", texto.match(/\W/g));

console.log("Espaço [ \\t\\n\\r\\f]:", texto.match(/\s/g));
console.log("Não Espaço [^ \\t\\n\\r\\f]:",texto.match(/\S/g));

// Shorthands de Classes de Caracteres
// Shorthand	Significado	          Equivalente
//    \d	    Dígito (0-9)	      [0-9]
//    \D	    Não dígito	          [^0-9]
//    \w	    Letras/Números        [a-zA-Z0-9_]
//    \W	    Não Letras/Números    [^a-zA-Z0-9_]
//    \s    	Espaço em branco	  [ \t\r\n\f\v]
//    \S    	Não espaço em branco  [^ \t\r\n\f\v]

// Shorthands de Âncoras
// Shorthand	Significado
//     ^        Início da linha
//     $    	Fim da linha
//    \b    	Limite de palavra
//    \B    	Não limite de palavra

// Shorthands de Quantificadores
// Shorthand	Significado	            Equivalente
//     ?	    0 ou 1 ocorrências	    {0,1}
//     *	    0 ou mais ocorrências	{0,}
//     +    	1 ou mais ocorrências	{1,}

// Escapando Caracteres Especiais
// Se você quiser pesquisar por um desses caracteres especiais literalmente, é necessário escapá-los com uma barra invertida (\). Exemplo: \. para um ponto literal, \? para uma interrogação literal.
