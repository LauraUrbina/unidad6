//for in
function funcionForIn(a){
    for (let x in a){
        console.log(a[x])
        //console.log(x, a[x]) posiciones
    }
}

let miarreglo = [34, 21, 2, 65, 4]
const miobjeto = {nombre: "Ana", edad: 21, genero: true}
funcionForIn(miarreglo)
funcionForIn(miobjeto)
//console.log(miarreglo[0])

function funcionFor(a){
    let valor = 0
    for(var i = 1; i <= a; i++){
        valor += i
    }
    return valor
}

a = 10
console.log("(for) sumatoria de numeros hasta ",a, "da: ", funcionFor(a))

function funcionWhile(a){
    let valor = 0
    var i = 1
    while(i <= a){
        valor += i
        i++
    }
    return valor
}

a = 10
console.log("(While) sumatoria de numeros hasta ",a, "da: ", funcionWhile(a))

function funciondo(a){
    let valor = 0
    var i = 1
    do{
        valor += i
        i++
    }    while(i <= a)
    return valor
}
a = 10
console.log("(do) sumatoria de numeros hasta ",a, "da: ", funciondo(a))