// Minha solução
const texto = `Lista telefônica:
    (11) 98756-1212
    98695-1236
    (31) 99658-8569
    98754-4567
    (47) 6352-2536
`;

const regex = /\(?\d+\)?\s?\d+-\d+/g;

console.log(texto.match(regex));

// solução do professor -> contém bug no DDD
console.log(texto.match(/\(?\d{0,2}\)?\s?\d{4,5}-\d{4}/g));
