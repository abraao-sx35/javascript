// const msg = () =>{
//     alert('clicou')
// }

//const c1 = document.querySelector('.c1')
const cursos = [...document.querySelectorAll('#curso')]

cursos.map((el)=>{
    el.addEventListener('click',(evt)=>{
        const el = evt.target
        el.classList.add('destaque')
        console.log(el.innerHTML + "foi clicado")
    })
})




// c1.addEventListener('click',(evt)=>{
//     const elemento = evt.target
//     elemento.classList.add('destaque')
// })