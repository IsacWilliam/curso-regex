const texto = 'Romário era um excelente jogador\n, mas hoje é um político questionador'

console.log(texto.match(/^r.*r$/gi)); // problema do dotall

console.log(texto.match(/^r[\s\S]*r$/gi));  // solução do problema do dotall em JS

/*
 Atualmente, há uma forma mais moderna e direta para tratar o problema do dotall em JavaScript, que é usando a flag s (dotall) introduzida no ES2018. Com essa flag, o caractere . também casa com quebras de linha (\n).
*/
console.log(texto.match(/^r.*r$/gsi)); // Solução mais moderna com flag 's'
