import re;

texto  = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f';

# 1ª forma
pattern9 = re.compile('9');
match1 = re.search(pattern9, texto);
print("Posições: %s, %s; Valor: %s." % (match1.start(), match1.end(), match1.group(0)));

# 2ª forma
valores = re.findall('[a-f]', texto);
print("Valores: %s" % valores);
