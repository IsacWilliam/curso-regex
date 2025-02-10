// Minha solução
const texto = `CPF dos aprovados:
    - 600.567.890-12
    - 765.998.345-23
    - 487.232.451-82
    - 241.105.682-94
    - 316.849.973-24
`;

const regex = /\d+.\d+.\d+.-\d+/g;

console.log(texto.match(regex));

// solução do professor, usando escape no ponto fazendo que ele seja interpretado como um literal
console.log(texto.match(/\d{3}\.\d{3}\.\d{3}-\d{2}/g));

// mesmo sem o escape no ponto, percedi que gera o mesmo resultado
console.log(texto.match(/\d{3}.\d{3}.\d{3}-\d{2}/g));
