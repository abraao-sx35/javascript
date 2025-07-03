const caixa1 = document.querySelector(".caixa")
const divs = [...document.querySelectorAll('.curso')]

//entendendo a relação de doom
console.log(caixa1.children)
//children = filhos da raiz


console.log(caixa1.firstElementChild)
//primeiro filho

console.log(caixa1.lastElementChild)
//ultimo filho

console.log(document.getRootNode())
//no raiz = pai