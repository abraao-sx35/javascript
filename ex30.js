const caixa = document.querySelector('#caixa1')
const btn = document.querySelector('#btn_copiar')

const novoelemento = document.createElement('div') // passar o elemento que vai ser criado

// novoelemento.classList.add('curso') // adicionando classe ao novo elemento criado

novoelemento.setAttribute('class','curso') // colocando atributo no elemento

novoelemento.innerHTML = 'reactNative' // colocando texto
caixa.appendChild(novoelemento) // adicioando um filho a caixa que vai ser o novo elemento

const cursos = ['HTML',"CSS","Javascript","PHP","React","MySQL"]
cursos.map((el,chave)=>{
console.log(chave)
const novoelemento = document.createElement('div')
novoelemento.setAttribute('id',"curso" + chave) 
novoelemento.setAttribute('class','curso') 
novoelemento.innerHTML = el
caixa.appendChild(novoelemento) 
})