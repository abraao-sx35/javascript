const caixaCursos = document.querySelector("#caixaCursos");
const btn_c = [...document.querySelectorAll(".curso")];
const c1_2 = document.querySelector("#c1_2");

const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "MySQL", "ReactNative"];
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado");
const btnRemoverCurso = document.getElementById('btnRemoverCurso')
const btnAdicionarNovoCurso = document.getElementById('btnAdicionarNovoCurso')
const inputCurso = document.getElementById('nomeCurso')

let indice = 0

const tirarSelecao = ()=>{
    const cursosSelecionados = [...document.querySelectorAll('.selecionado')]
    cursosSelecionados.map((el)=>{
        el.classList.remove('selecionado')
    })


const criarcurso = (curso)=>{
    const novoElemento = document.createAttribute("div");
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.setAttribute("id","c"+indice)
    novoElemento.innerHTML = curso
    novoElemento.addEventListener('click'),(evt)=>{
        evt.target.classList.toggle('selecionado')
    }
}

cursos.map((el, chave) => {
  const novoElemento = document.createElement("div");
  novoElemento.setAttribute("id", "c" + chave);
  novoElemento.setAttribute("class", "curso c1");
  novoElemento.innerHTML = el;

  const comandos = document.createElement("div");
  comandos.setAttribute("class", "comandos");

  const rb = document.createElement("input");
  rb.setAttribute("type", "radio");
  rb.setAttribute("name", "rb_curso");

  comandos.appendChild(rb);
  novoElemento.appendChild(comandos);

  caixaCursos.appendChild(novoElemento);
});


const cursoSelecionado = ()=>{
    const cursosSelecionados = [...document.querySelectorAll('.selecionado')]
     return  cursosSelecionados[0]
}

btnCursoSelecionado.addEventListener('click',()=>{
    try{
        alert('curso selecionado: ' + cursoSelecionado().innerHTML)
    } catch(e){
        alert("selecione um curso")
    }
})


btnRemoverCurso.addEventListener('click',()=>{
  const cs = cursoSelecionado()
  if( cs != undefined){
    const cursosselecionados = cs.parentNode.parentNode
    cursosselecionados.remove()
  }else{
    alert("selecione um curso para remover")
  }
})

btnAdicionarNovoCurso.addEventListener('click',(evt)=>{
   try{
    if(nomeCurso != ""){
        const NovoCurso = criarcurso(nomeCurso.value)
        caixaCursos.insertBefore(NovoCurso, cursoSelecionado())
    }else{
        alert('digite o nome do curso')
    }
   } catch(e){
        alert('selecione um curso')
   }
})
