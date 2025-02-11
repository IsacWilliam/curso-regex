const texto = `
Lista telefônica:
    - (21) 12345-6789
    - (11) 62300-2234
    - 5678-7771
    - (85)3333-7890
    - (1) 4321-1234
`;

// solução professor
console.log(texto.match(/(\(\d{2}\)\s?)?\d{4,5}-\d{4}/g));

// adaptei
console.log(texto.match(/(\(\d*\)\s?)?\d+-\d+/g));
