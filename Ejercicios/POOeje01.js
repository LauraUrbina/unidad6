/*Crea una clase "Titular"
Crear una clase "CuentaBancaria"*/

class Titular{
    #Nombre
    #DocIdentidad
    #FechaNac
    getNombre() {return this.#Nombre}
    getDocIdentidad() {return this.#DocIdentidad}
    getFechaNac() {return this.#FechaNac}
    getEdad(){
        var hoy = new Date()
        return hoy.getFullYear() - this.#FechaNac.getFullYear()
    }
    constructor (Nombre, DocIdentidad, FechaNac){
        this.#Nombre = Nombre
        this.#DocIdentidad = DocIdentidad
        this.#FechaNac = FechaNac
    }
}

class CuentaBancaria{
    #NumCuenta
    #Titular
    #Saldo
    getNumCuenta() {return this.#NumCuenta}
    getTitular() {return this.#Titular}
    getSaldo() {return this.#Saldo}
    Depositar(valor) {
        this.#Saldo += valor
        console.log(valor, "Depositados al saldo")
    }
    Retirar(valor) {
        if(this.#Saldo >= valor){
            this.#Saldo -= valor
            console.log(valor, "retirados al saldo")
            return true
        } else {
            console.error("Operación no realizada, saldo inferior al retiro")
            return false
        }
    }
    constructor(Titular, SaldoInicial){
        this.#Titular = Titular
        this.#Saldo = SaldoInicial
        this.#NumCuenta = Math.floor(Math.random()*100)
    }
}

console.log("♦Cuenta Bancaria♦")
var Titular01 = new Titular("Juana", 1234, new Date(2003, 12, 25))
console.log(Titular01.getNombre(), Titular01.getDocIdentidad(),
            Titular01.getFechaNac(), Titular01.getEdad())
var miCuenta01 = new CuentaBancaria(Titular01, 50000)
console.log("♦Cuenta Bancaria♦")
console.log("Numero de cuenta: ", miCuenta01.getNumCuenta())
console.log("Documento del titular: ", miCuenta01.getTitular().getDocIdentidad())
console.log("Nombre del titular: ", miCuenta01.getTitular().getNombre())
console.log("Fecha de nacimiento: ", miCuenta01.getTitular().getFechaNac())
console.log("Edad del Titular: ", miCuenta01.getTitular().getEdad())
console.log("Saldo de la cuenta: ", miCuenta01.getSaldo())
console.log("")
miCuenta01.Depositar(50000)
console.log("Nuevo saldo de la Cuenta: ", miCuenta01.getSaldo())
miCuenta01.Retirar(80000)
console.log("Nuevo saldo de la Cuenta: ", miCuenta01.getSaldo())
miCuenta01.Retirar(80000)
console.log("Nuevo saldo de la Cuenta: ", miCuenta01.getSaldo())
