const texto = 'dia diatonico diafragma media wikipedia bom-dia bom_dia melodia radial';

console.log(texto.match(/\bdia\w+/gi));
console.log(texto.match(/\w+dia\b/gi));
console.log(texto.match(/\bdia\b/gi));

// borda é \W, que é igual a [^A-Za-z0-9_], ou seja, temos problemas com acentuação.

const texto1 = 'dia diatônico diafragma, média wikipédia bom-dia bom_dia melodia radial';
console.log(texto1.match(/\bdia\b/gi));
console.log(texto1.match(/(\S*)?dia(\S*)?/gi));
console.log(texto1.match(/([\wÀ-ú-]*)?dia([\wÀ-ú-]*)?/gi));
