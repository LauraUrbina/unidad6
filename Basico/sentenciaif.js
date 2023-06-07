function funcionif01(a){
    if (a < 18){
    console.log("es menor de edad")
}
}
function funcionif02(a){
    if (a < 18){
    console.log("es menor de edad")
} else {
    console.log("es mayor de edad")
}
}
function funcionif03(a){
    if (a <= 5){
    console.log("Primera Infancia")
} else if (a <= 11) {
    console.log("Infancia")
} else if (a <= 18) {
    console.log("Adolescencia")
} else if (a <= 26) {
    console.log("Juventud")
} else if (a <= 59) {
    console.log("Adultez")
} else {
    console.log("Vejez")
}
}

//funcionif01(15)
//funcionif01(19)
funcionif02(20)
//funcionif02(19)
funcionif03(36)