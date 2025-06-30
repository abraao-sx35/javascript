//manupulação classe name

const dc1 = document.getElementsByClassName('c1')[0]
const dc2 = document.getElementsByClassName('c2')[0]
const dc3 = document.getElementsByClassName('c3')[0]

const arrayelementos = [dc1,dc2,dc3]

// for (div of arrayelementos ){
//     div.innerHTML = 'pao'
// }

//forma moderna
arrayelementos.map((e)=>{
    e.innerHTML = 'forma moderna'
})