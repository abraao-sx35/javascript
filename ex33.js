const caixaCursos = document.querySelector("#caixaCursos");
const btn_c = [...document.querySelectorAll(".curso")];
const c1_2 = document.querySelector("#c1_2");

const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "MySQL", "ReactNative"];
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado");
const btnRemoverCurso = document.getElementById('btnRemoverCurso')
const btnAdicionarNovoCurso = document.getElementById('btnAdicionarNovoCurso')
const inputCurso = document.getElementById('nomeCurso')

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


const radioselecionado = ()=>{
  const radios = [...document.querySelectorAll('input[type=radio]')]
  const radiosselecionados = radios.filter((ele)=>{
      return ele.checked
  })  
     return  radiosselecionados[0]
}

btnCursoSelecionado.addEventListener('click',()=>{
  const rs = radioselecionado()
  if( rs != undefined){
    const cursosselecionados = rs.parentNode.previousSibling.textContent
    alert(`curso selecionado: ${cursosselecionados}`)
  }else{
    alert("selecione um curso")
  }
  

})


btnRemoverCurso.addEventListener('click',()=>{
  const rs = radioselecionado()
  if( rs != undefined){
    const cursosselecionados = rs.parentNode.parentNode
    cursosselecionados.remove()
  }else{
    alert("selecione um curso para remover")
  }
})

btnAdicionarNovoCurso.addEventListener('click',()=>{
  const criando = document.createElement("div");
  criando.setAttribute('id','c')
  criando.setAttribute("class", "curso c1");
  criando.innerHTML = inputCurso.value

  const comandos = document.createElement("div");
  comandos.setAttribute("class", "comandos");

  const rb = document.createElement("input");
  rb.setAttribute("type", "radio");
  rb.setAttribute("name", "rb_curso");

  comandos.appendChild(rb);
  criando.appendChild(comandos);

  caixaCursos.appendChild(criando);
  alert('curso adicionado')

})

// const novoElemento = document.createElement("div");
//   novoElemento.setAttribute("id", "c" + chave);
//   novoElemento.setAttribute("class", "curso c1");
//   novoElemento.innerHTML = el;

// parentNode
// previousSibling
// nextSibling