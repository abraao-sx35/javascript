const resultado = document.getElementById('resposta');
const calcular = document.getElementById('calcular');

function imc(){
    const nome1 = document.getElementById("nome").value;
    const peso1 = document.getElementById("peso").value;
    const altura1 = parseFloat(document.getElementById("altura").value);

    if ( nome1 !== "" && peso1 !== "" && altura1 !== ""){
        alert('valores preenchidos')
        const valorIMC = (peso1 / (altura1* altura1)).toFixed(1)
        resultado.textContent = ` ola ${nome1} seu IMC é: ${valorIMC}`;
    } else{
        alert('preencha totos os valores')
    }
}


calcular.addEventListener('click',imc);





