texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f';
regexNove = Regexp::new('9');
puts regexNove.match(texto);

regexNove = %r{e};
puts regexNove.match(texto);

puts regexNove =~ 'e894drgththgththe';

regexLetras = /[a-f]/;
puts texto.scan(regexLetras);
puts texto.scan(regexLetras).join(' ');

puts texto.split(/,/);
puts texto.split(/,/).join(' ');

print texto.split(/[aeiou]/);
