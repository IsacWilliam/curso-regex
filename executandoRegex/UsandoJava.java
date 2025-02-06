package executandoRegex;

import java.util.regex.*;


public class UsandoJava {
    public static void main(String[] args) {
        //1º Exemplo
        // String texto = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f";
        // String regex = "[02468]";
        // Pattern pattern = Pattern.compile(regex);
        // Matcher matcher = pattern.matcher(texto);

        // while (matcher.find()) {
        //     System.out.printf("Posicoes: %s, %s, Valor: %s%n", matcher.start(), matcher.end(), matcher.group());
        // }

        //2º Exemplo
        String texto = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f";
        System.out.println(texto.replaceAll("[7-9]", "Achei"));
    }
}