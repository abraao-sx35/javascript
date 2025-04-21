function verificar(){

    //idade usuario
    var agora = new Date();
    var anoatual = agora.getFullYear();
    var ano = document.getElementById('nascimento');
    var numero = Number(ano.value);
    var mostrar = document.getElementById('inden');
    var idade = anoatual - numero;

    // Verificação
    if (numero == 0 || numero > anoatual) {
    alert('Preencha os dados corretamente');
    return;
    } else if(idade >= 140){
        alert('Preencha os dados corretamente');
        return;
    }

    //sexo usuario
    var masculino = document.getElementById('masc')
    var feminino = document.getElementById('femi')
    //foto de acordo com o sexo
     var imagem = document.getElementById('imagem')
    if (feminino.checked){
        mostrar.innerText = `indentificamos uma mulher com ${idade}`
    }else if(masculino.checked){
        mostrar.innerText = `indentificamos um homen com ${idade}`
    }

    var imagem = document.getElementById('imagem')
    if ( masculino.checked && idade >= 1 && idade <=15 ){
        imagem.src = 'imagem/menino.jpg'
    }
    else if( masculino.checked && idade >16 && idade <=59){
        imagem.src = 'imagem/homen.jpg'
    }
    else if( masculino.checked && idade >= 60){
        imagem.src = 'imagem/idoso.jpg'
    }


    //separando
    if ( feminino.checked && idade >= 1 && idade <=15){
        imagem.src = 'imagem/menina.jpg'
    }
    else if( feminino.checked && idade >16 && idade <=59){
        imagem.src = 'imagem/mulher.jpg'
    }
    else if( feminino.checked && idade >= 60){
        imagem.src = 'imagem/idosa.jpg'
    }
}