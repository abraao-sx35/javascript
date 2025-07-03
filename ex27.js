//para propagação parar um evento

const caixa = document.querySelector('.caixa')
caixa.addEventListener('click',(evt)=>{
    console.log('clicou')
})

const cursos = [...document.querySelectorAll(".curso")]
cursos.map((el)=>{
    el.addEventListener('click',(evt)=>{
        evt.stopPropagation()
        console.log('pegou')
    })
})