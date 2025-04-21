var idade = 67
if (idade < 16){
    console.log(`com ${idade} vc nao pode votar`)
}
// dentro do else esta o if com a condicao
else if (idade < 18 || idade >= 67){ // || e true/false
    console.log(`com ${idade} seu voto e opcional`)
} else {
    console.log(`com ${idade} seu voto e obrigatorio`)
}