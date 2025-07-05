const caixa = document.querySelector('#caixa1')
const btn = document.querySelector('#btn_copiar')
console.log(caixa.hasChildNodes())
//retorna true ou falso se tiver um filho

// console.log(btn.children)
//retonar o elemento 

// if (btn.children.length > 0){
//     console.log('possui filhos')
// }else{
//     console.log('nao possui filhos')
// }


// condição termaria  praticamente um if/else
console.log(caixa.children.length > 0 ? 'possui filho': 'nao possui filhos')

console.log(caixa.firstElementChild)
// caixa.firstElementChild.innerHTML = 'trocado'

const div =  document.querySelector('#c1_2')
console.log(div.parentElement.parentElement.parentElement)
// pai do elemento , avo do elemento , bisavo do elemento