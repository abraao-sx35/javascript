//metodo map

// var cursos = ['python','javasp','java','html','css']
// // no map se passa o elemento e dps o indice
// console.log( 'cursos e suas posições')
// cursos.map((elemento , indice) =>{
//     console.log('cursos ' + elemento + " - posição do curso: " + indice)
// })

const converter = (e) => parseInt(e)
let dobrar = (e)=> e*2
let num = ['1','2','3','4','5'].map(dobrar)
console.log(num)