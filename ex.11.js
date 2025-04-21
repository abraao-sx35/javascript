var agora = new Date()  //dia atual
var hora =  agora.getHours() // mostra a hora atual que esta rodando o script
console.log(`agora sao ${hora} horas`)
if (hora < 12){
    console.log('esta de manha , tenha um bom dia')
}
else if (hora >= 12 && hora <= 17){
    console.log(`esta de tarde , tenha uma boa tarde`)
} else {
    console.log('esta de noite , tenha uma boa noite')
}

// && = and
// || = or