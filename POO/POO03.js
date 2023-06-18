/*
Clases abstractas
*/
class Figura2D{
    _Tipo
    constructor(){
        if (new.target === Figura2D){
            throw new TypeError('No puede instanciar una clase abstracta')
        }
        this._Tipo = "Mi Figura 2D es un "
    }
    getArea(){throw new TypeError('Debe implementar el metodo getArea()')}
    getPeri(){throw new TypeError('Debe implementar el metodo getPeri()')}
    getTipo(){return this._Tipo}
}
class Circulo extends Figura2D{
    constructor(radio){
        super()
        this._radio = radio
        this._Tipo += "Circulo"
    }
    getArea(){
        return Math.PI * this._radio * this._radio
    }
    getPeri(){
        return 2 * Math.PI * this._radio
    }
}

class Rectangulo extends Figura2D{
    constructor(base, altura){
        super()
        this._Base = base
        this._Altura = altura
        this._Tipo += "Rectangulo"
    }
    getArea(){
        return this._Base * this._Altura
    }
    getPeri(){
        return (2 * this._Base)+ (2 *this._Altura)
    }
}

class Cuadrado extends Figura2D{
    constructor(lado){
        super()
        this._Lado = lado
        this._Tipo += "Cuadrado"
    }
    getArea(){
        return this._Lado * this._Lado
    }
    getPeri(){
        return(4 * this._Lado)
    }
}



//var mifig01 = new Figura2D(); console.log(typeof(mifig01))
var miCirculo = new Circulo(2)
console.log("Tipo: ", miCirculo.getTipo(), "Area: ", miCirculo.getArea(), 
"Perimetro: ", miCirculo.getPeri())

var miRectangulo = new Rectangulo(2, 3)
console.log("Tipo: ", miRectangulo.getTipo(), "Area: ", miRectangulo.getArea(), 
"Perimetro: ", miRectangulo.getPeri())

var miCuadrado = new Cuadrado(5)
console.log("Tipo: ", miCuadrado.getTipo(), "Area: ", miCuadrado.getArea(), 
"Perimetro: ", miCuadrado.getPeri())