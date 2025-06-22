/* funcao anonima */
let g = function(v1,v2){
    return v1+v2
}

console.log(g(10,5))



//função construtor anonima
let f = new Function("v1","v2","return v1*v2")
//em uma função construtora o F tem que ser maiusculo é passar os parametros entre aspas
console.log(f(10,5))
