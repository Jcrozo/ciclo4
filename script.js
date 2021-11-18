let numero = 8

console.log(esPrimo(numero))

function esPrimo(nun){
    let contDivisores = 0
    for (let i = 1; i <=nun; i++){
        if (nun % i ==0){
            contDivisores = contDivisores+1
        }    
    }
    if (contDivisores == 2){
        return true
    }
    return false
}
