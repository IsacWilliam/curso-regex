const texto = 'O José Simão é muito engraçado... hehehehehehe';
console.log(texto.match(/(he)+/g));

const texto1 = `http://www.site.info www.escola.ninja.br google.com.ag`;
console.log(texto1.match(/(http:\/\/)?(www\.)?\w+\.\w{2,}(\.\w{2})?/g));
