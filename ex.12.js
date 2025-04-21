var agora = new Date()
var diasemana = agora.getDay()
/*
O valor retornado pelo método getDay() é interpretado da seguinte maneira:
0  = Domingo
1  = Segunda-feira
2  = Terça-feira
3  = Quarta-feira
4  = Quinta-feira
5  = Sexta-feira
6  = Sábado
*/


// swittch e usado em condiçoes com multiplas escolhas
switch(diasemana){
    case 0:
        console.log('domingo')
        break
    case 1:
        console.log('segunda')
        break
    case 2:
        console.log('terça')
        break
    case 3:
        console.log('quarta')
        break
    case 4:
        console.log('quinta')
        break
    case 5:
        console.log('sexta')
        break
    default:
        console.log('sabado')
        break
}