package main

import ("bytes", "fmt", "regexp")

func main() {
	texto := "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f"
	regex9, _ := regexp.Compile("9")
	fmt.Println(regex9.MatchString(texto))
	fmt.Println(regex9.FindString(texto))
	fmt.Println(regex9.FindStringIndex(texto))
	fmt.Println(regex9.FindStringSubmatch(texto))
	fmt.Println(regex9.FindStringSubmatchIndex(texto))
	fmt.Println(regex9.FindAllString(texto, -1))
	fmt.Println(regex9.FindAllStringSubmatchIndex(texto, -1))
	fmt.Println(regex9.FindAllStringSubmatch(texto, -1))
	fmt.Println(regex9.FindAllStringSubmatchIndex(texto, -1))
	fmt.Println(regex9.ReplaceAllString(texto, "Achei"))

	regexLetras, _ := regexp.Compile("[a-f]")
	fmt.Println(regexLetras.FindAllString(texto, 20))
	fmt.Println(regexLetras.ReplaceAllString(texto, "Achei"))

	resultado := regexLetras.ReplaceAllFunc([]byte(texto), bytes.ToUpper)
	fmt.Println(string(resultado))
}
