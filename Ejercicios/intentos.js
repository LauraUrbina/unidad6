/* ingresar la nota del examen de programacion
y si es mayor o igual a siete imprimir que aprobo,
sino que debe recuperar*/

function nota(N){
if (N < 7){
    console.log("Debe recuperar")
} else {
    console.log("Aprobo")
}
}
nota(7)

function notaFinal(Z){
    if (Z <= 3){
        console.log("Muy deficiente")
    } else if (Z <= 5){
        console.log("Insuficiente")
    } else if (Z <= 6){
        console.log("Suficiente")
    } else if (Z <= 7){
        console.log("Bien")
    } else if (Z <= 9){
        console.log("Notable")
    } else {
        console.log("Sobresaliente")
    }
}

notaFinal(9)