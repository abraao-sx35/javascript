/* passando varios valores */
function somar(...valores){
    let res = 0
    for (let v of valores){
        res+= v
    }
    return res
    /* quantidade de valores passados*/
}

console.log(somar(2,3,4,2,1))