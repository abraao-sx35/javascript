function maior18(valor){
    if (valor >= 18){
        return valor
    }
}


const idades = [12,18,42,8,5,24]
const maior = idades.filter(maior18) // valor,indice , arry


console.log(idades)
console.log(`as idades com maior de  18 anos são ${maior}`)

//metodo filter