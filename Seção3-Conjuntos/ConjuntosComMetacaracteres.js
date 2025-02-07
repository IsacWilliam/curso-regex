// Dentro de conjuntos os meta caracteres funcionam de forma LITERAL
const texto = '.$+*?-';

console.log("01:", texto.match(/[+.?*$]/g));  //não precisam de escape dentro do conjunto
console.log("02:", texto.match(/[+.?*$]./g));
console.log("03:", texto.match(/[$-?]/g));  // isso é um intervalo (range)

// NÃO é um intervalo (range)
console.log("04:", texto.match(/[$\-?]/g));
console.log("05:", texto.match(/[-?]/g));

// Podem precisar de escape dentro do conjunto: - [ ] ^
