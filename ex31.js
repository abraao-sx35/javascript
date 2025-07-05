const caixa = document.querySelector('#caixa1')
const btn = document.querySelector('#btn_copiar')



const cursos = ['HTML',"CSS","Javascript","PHP","React","MySQL"]
cursos.map((el,chave)=>{
    console.log(chave)
    const novo = document.createElement('div')
    novo.setAttribute('id',"curso" + chave) 
    novo.setAttribute('class','curso') 
    novo.innerHTML = el
    caixa.appendChild(novo) 


    const lixo = document.createElement('div')
    lixo.setAttribute('class','lixeira')
    lixo.innerHTML = 'remover'
    lixo.addEventListener('click',(evt)=>{// evento ao clicar
    caixa.removeChild(evt.target.parentNode) // removendo da caixa o target que no caso é a div completa
    })
    novo.appendChild(lixo)
})

