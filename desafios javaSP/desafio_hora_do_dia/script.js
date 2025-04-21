function carregar(){
    var agora = new Date()
    var hora = agora.getHours()
    var minuto = agora.getMinutes()
    var foto = document.getElementById('imagem')
    
    if (hora >= 6 && hora < 12) {
    var hora_manha = document.getElementById('horario')
    hora_manha.innerText = `Agora são ${hora}:${minuto} horas da manhã`
    foto.src = 'imagem/fotomanha.jpg'
    }


    else if (hora >= 12 && hora <= 17){
    var  hora_tarde = document.getElementById('horario')
     hora_tarde.innerText = `agora sao ${hora}:${minuto} horas da tarde`
     foto.src = 'imagem/fototarde.jpg'


    } else if (hora >= 18 && hora <=23) {
    var hora_noite = document.getElementById('horario')
    hora_noite.innerText = `agora sao ${hora}:${minuto} horas da noite`
    foto.src = 'imagem/fotonoite.jpg'


    } else  {
    var hora_madrugada = document.getElementById('horario')
    hora_madrugada.innerText = `agora sao ${hora}:${minuto} horas da madrugada`
    foto.src = 'imagem/madrugada.jpg'
    }
}