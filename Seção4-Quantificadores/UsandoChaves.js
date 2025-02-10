const texto = 'O João recebeu 120 milhões apostando nos números 6 9 21 23 45 46';

//Quantificador {}
console.log(texto.match(/\d{1,2}/gi));
console.log(texto.match(/[0-9]{2}/gi));
console.log(texto.match(/\d{1,}/gi));
console.log(texto.match(/\w{7}/gi));
console.log(texto.match(/[\wõ]{7,}/gi));


/*
O quantificador {} em expressões regulares permite definir o número de vezes que um caractere, grupo ou classe de caracteres deve aparecer.

Sintaxe Geral
{min, max}

    min: número mínimo de repetições obrigatórias.
    max: número máximo de repetições permitidas (opcional).

Casos de Uso
    1- Repetição Exata {n} Especifica que o elemento deve aparecer exatamente n vezes.
        \d{3}

        * Corresponde a exatamente 3 dígitos, como "123" ou "456".

    2 - Repetição com Limite {min,max} Especifica que o elemento pode aparecer entre min e max vezes.
        \d{2,4}

        * Corresponde a 2, 3 ou 4 dígitos, como "12", "123", ou "1234".
        * Não corresponde a "1" ou "12345".

    3 - Repetição com Mínimo {min,} O elemento deve aparecer pelo menos min vezes, sem limite máximo.
        \d{2,}

        * Corresponde a 2 ou mais dígitos, como "12", "123", "123456".

Resumo
    Notação	      Descrição	               Exemplo	 Casos Válidos
    {n}	          Exatamente n vezes	   a{3}	     "aaa"
    {min,}	      Pelo menos min vezes     \d{2,}	 "12", "12345"
    {min,max}	  Entre min e max vezes    \d{1,3}	 "1", "12", "123"
*/