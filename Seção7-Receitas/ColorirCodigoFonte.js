const aplicarCor = (txt, reg, cor) => txt.replace(reg, `<span style='color: #${cor}'><b>$1</b></span>`);

const files = require('./files');
const texto = files.read('codigoFonte.html');
const codeRegex = /<code>[\s\S]*<\/code>/i;

let codigo = texto.match(codeRegex)[0];

// String...
codigo = aplicarCor(codigo, /(\".*\")/g, 'ce9178');

// Algumas palavras reservadas de Java
codigo = aplicarCor(codigo, /\b(package|public|class|static|if|else)\b/g, 'd857cf');

//Alguns tipos de java
codigo = aplicarCor(codigo, /\b(void|int)/g, '1385e2');

// comentários de multiplas linhas
codigo = aplicarCor(codigo, /(\/\*[\s\S]*\*\/)/g, '267703');

//comentário de uma linha
codigo = aplicarCor(codigo, /(\/\/.*?\n)/g, '267703');

const conteudoFinal = texto.replace(codeRegex, codigo);

files.write('codigoFonte.html', conteudoFinal);
