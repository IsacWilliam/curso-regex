const texto = 'João é calmo, mas no trânsito fica nervoso.'

console.log(texto.match(/[\wÀ-ú]+/gi));

// Positive Lookahead
console.log(texto.match(/[\wÀ-ú]+(?=,)/gi));
console.log(texto.match(/[\wÀ-ú]+(?=\.)/gi));
console.log(texto.match(/[\wÀ-ú]+(?=, mas)/gi));


// Negative Lookahead
// Oposto da linha 6. Problema com borda na palavra é
console.log(texto.match(/[\wÀ-ú]+\b(?!,)/gi));

// Essa regex resolve o problema anterior, porém traz um espaço em branco e o ponto
console.log(texto.match(/[\wÀ-ú]+[\s|\.](?!,)/gi));
