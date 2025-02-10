// Minha solução
const texto = `Os e-mails dos convidados são:
    bel.fulano@teste.com
    cicrano@teste.teste.com
    beltrano@ciateste.com.br
    seilaquem@doidera.com.us
    brenda_loira@lioragata.ual
    viviAgata@lindas.com.br
`;

const regex = /\w+@\w+.+/g;

console.log(texto.match(regex));

// solução do professor
// console.log(texto.match(/[\w.]+@\w+\.\w{2,4}\.?\w{0,2}/g));

// adaptei dessa forma
console.log(texto.match(/[\w.]+@\w+\.\w+\.?\w+/g));
