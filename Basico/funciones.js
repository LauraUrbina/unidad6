//funcion que no tiene parametros y no regresa nada}
function funcion01 () {
    var a = 4, b = 3
    console.log("ejecutando dentro de funcion01", a * b)
}
//funcion que si tiene parametros y no regresa nada
function funcion02(a, b){
    console.log("ejecuntando dentro de funcion02",a *b)
}

//funcione que no tiene parametros y regresa algo
function funcion03 () {
    var a = 2, b = 7
    console.log("ejecutando dentro de funcion03")
    return a+b
}
//funcion que si tiene parametros y regresa valor
function funcion04 (a, b, c) {
    console.log("ejecutando dentro de la funcion04", (a * b) + c)
    return (a * b) + c
}

funcion01()
funcion02(3,5)
var c = funcion03()
console.log(c)
c = funcion04(5, 4, c)

//funciones fat arrow
const mifuncion01 = () => {
    console.log("mi primer funcion Fat Arrow")
}
const mifuncion02 =(a,b) => a * b

mifuncion01()
var c = mifuncion02(6, 8)
console.log(c)


console.log("Callback")
function sumar(a, b, c){
    const r = a + b
    c(r)
}
function Callback(d){
    console.log("resultado de la suma", d)
}
sumar(4, 5, Callback)

console.log("Funciones sin nombre")
sumar(4, 5, function(d){
    //todo el codigo de la funcion
    console.log("resultado de la suma por funcion sin nombre: ", d)
})
