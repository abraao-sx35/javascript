const caixaCursos = document.querySelector("#caixaCursos");
const btn_c = [...document.querySelectorAll(".curso")];
const c1_2 = document.querySelector("#c1_2");

const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "MySQL", "ReactNative"];
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado");

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

btnCursoSelecionado.addEventListener('click',()=>{
    const radios = [...document.querySelectorAll('input[type=radio]')]
    let radiosselecionados = radios.filter((ele)=>{
        return ele.checked
    })

    radiosselecionados = radiosselecionados[0]
   // const cursosselecionados = radiosselecionados.parentNode.parentNode.textContent
   const cursosselecionados = radiosselecionados.parentNode.previousSibling.textContent
   alert(`curso selecionado: ${cursosselecionados}`)

    console.log(radios)
    console.log(radiosselecionados)
    console.log(cursosselecionados)
})

// parentNode
// previousSibling
// nextSibling