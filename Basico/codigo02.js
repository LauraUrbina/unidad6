//OPERADORES ARITMETICOS
var num1 = 8
var num2 = 2
var num3 = 1

var num4 = num1 + num2 //suma
console.log(num1, num2, num4)
var num4 = num1 - num2 //resta
console.log(num1, num2, num4)
var num4 = num1 * num2 //multiplicacion
console.log(num1, num2, num4)
var num4 = num1 / num2 //division
console.log(num1, num2, num4)
var num4 = num1 % num2 //modulo
console.log(num1, num2, num4)
num3++
console.log(num3)  //incremento
num3--
console.log(num3)  //decremento

//OPERADDORES DE COMPARACION
var num1 = 8
var num2 = 2
var num3 = 1
console.log("Operadores De comparacion")
console.log(num1 > num2)
console.log(num1 >= num1)
console.log(num1 < num2)
console.log(num1 <= num2)
console.log(num1 == num2)
console.log(num1 != num1)
console.log(0 == false)
console.log(0 === false)
console.log(0 !== false)

//OPERADDORES DE ASIGNACION
var num1 = 8
var num2 = 2
console.log("Operadores De Asignacion")
num1 += num2
console.log(num1) //sumar y asignar
num1 -= num2
console.log(num1) //resta y asignar
num1 *= num2
console.log(num1) //multiplicar y asignar
num1 /= num2
console.log(num1) //dividir y asignar
num1 %= num2
console.log(num1) //modulo y asignar

//OPERADDORES LOGIICOS
console.log("Operadores Logicos")
console.log(true & false)
console.log(true & false)
console.log(true & false) //and y
console.log(true || false)
console.log(true || false)
console.log(true || false) //or o
console.log(!true)
console.log(!false)

//OPERADDORES CONDICIONAL
console.log("Operador Condicional")
var num1 = 8
var num2 = 2
var mayor
num1 > num2 ? mayor = num1 : mayor =num2
console.log("El numero mayos es", mayor)

true & false ? mayor="Verdadero" : mayor = "Falso"
console.log(mayor)
