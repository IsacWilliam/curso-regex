const texto = `
ca	r
r	o s!
`
console.log(texto.match(/ca\tr\nr\to\ss!/))
console.log(texto.match(/ca\tr\nr\to s!/))
// Ambas geram o mesmo resultado
