const caixa1 = document.querySelector('#caixa1')
const caixa2 = document.querySelector('#caixa2')
const botao = document.querySelector('#btn_copiar')


const cursos = [...document.querySelectorAll(".curso")]
cursos.map((el)=>{
    el.addEventListener('click',(selecionar)=>{
        const el = selecionar.target
        el.classList.toggle('selecionado')
       
    })
})


botao.addEventListener('click',()=>{
    const Cursos_selecionados = [...document.querySelectorAll('.selecionado')]
    const Cursos_NAOselecionados = [...document.querySelectorAll('.curso:not(.selecionado)')]
    //dos elementos que tem a classe curso obtenha os que n tem as classes selecionado
    Cursos_selecionados.map((el)=>{
        caixa2.appendChild(el)
        //appendchild = adiciona um filho a Tag pai
    })

    Cursos_NAOselecionados.map((el)=>{
        caixa1.appendChild(el)
        //appendchild = adiciona um filho a Tag pai
    })
})


