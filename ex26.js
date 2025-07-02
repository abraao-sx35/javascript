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
    Cursos_selecionados.map((el)=>{
        caixa2.appendChild(el)
        //appendchild = adiciona um filho a Tag pai
    })
})