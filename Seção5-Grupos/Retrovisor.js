const texto = '<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>';
console.log(texto.match(/<(\w+)>.*<\/\1>/g));

const texto1 = 'Lentamente é mente muito lenta.';

// Captura todas as ocorrências das palavras "lenta" e "mente" juntas, sem restrições, considerando maiúsculas e minúsculas.
console.log(texto1.match(/(lenta)(mente)/gi));

// Captura padrões onde "lenta" e "mente" aparecem seguidos por qualquer texto, depois reaparecendo "mente" (\2 se refere ao segundo grupo capturado).
console.log(texto1.match(/(lenta)(mente).*\2/gi));

// Captura padrões onde "lenta" e "mente" aparecem seguidos por qualquer texto, depois reaparecendo "lenta" (\1 se refere ao primeiro grupo capturado).
console.log(texto1.match(/(lenta)(mente).*\1/gi));

// Captura padrões onde "lenta" e "mente" aparecem seguidos por qualquer texto, depois reaparecendo "mente", seguido por mais texto e terminando com "lenta" e um ponto final.
console.log(texto1.match(/(lenta)(mente).*\2.*\1\./gi));

// Não armazena o conteúdo do grupo "lenta" devido ao uso de "?:", mas captura "mente" e reaparece "mente" mais tarde.
console.log(texto1.match(/(?:lenta)(mente).*\1/gi));

// Captura "lenta" e opcionalmente "mente" (o "?" torna o grupo "mente" opcional).
console.log(texto1.match(/(lenta)(mente)?/gi));

// Captura "lenta" e "mente", porém "$2" na chamada da função `match` não faz sentido, pois essa função não suporta parâmetros de substituição diretamente. A forma correta seria com `replace`.
console.log(texto1.match(/(lenta)(mente)/gi, '$2'));
