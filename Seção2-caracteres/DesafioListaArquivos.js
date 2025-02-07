/* Desafio:
    Encontrar na string toda terminação .mp3
*/
const texto = 'lista de arquivos mp3: jazz.mp3, rock.mp3, podcast.mp3, blues.mp3';
console.log(texto.match(/\.mp3/g)) // Solução correta
console.log(texto.match(/.mp3/g)) // Solução errada
